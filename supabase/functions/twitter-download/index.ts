const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();

    if (!url) {
      return new Response(
        JSON.stringify({ success: false, error: 'URL é obrigatória' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Extract tweet ID from URL
    const tweetIdMatch = url.match(/(?:twitter\.com|x\.com)\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)/);
    if (!tweetIdMatch) {
      return new Response(
        JSON.stringify({ success: false, error: 'Link do Twitter/X inválido' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const tweetId = tweetIdMatch[2];
    console.log('Extracting video from tweet:', tweetId);

    // Use Twitter's syndication API (public, no auth required)
    const syndicationUrl = `https://cdn.syndication.twimg.com/tweet-result?id=${tweetId}&lang=pt&token=0`;
    
    const response = await fetch(syndicationUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });

    if (!response.ok) {
      // Try alternative endpoint
      const altUrl = `https://api.vxtwitter.com/Twitter/status/${tweetId}`;
      const altResponse = await fetch(altUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      });

      if (!altResponse.ok) {
        return new Response(
          JSON.stringify({ success: false, error: 'Não foi possível encontrar o vídeo. Verifique se o tweet contém um vídeo e se o link está correto.' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const altData = await altResponse.json();
      
      if (!altData.media_extended || altData.media_extended.length === 0) {
        return new Response(
          JSON.stringify({ success: false, error: 'Este tweet não contém vídeos.' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const videos = altData.media_extended
        .filter((m: any) => m.type === 'video' || m.type === 'gif')
        .map((m: any) => ({
          url: m.url,
          thumbnail: m.thumbnail_url,
          type: m.type,
          duration: m.duration_millis ? Math.round(m.duration_millis / 1000) : null,
        }));

      if (videos.length === 0) {
        return new Response(
          JSON.stringify({ success: false, error: 'Este tweet não contém vídeos.' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({
          success: true,
          tweet: {
            text: altData.text || '',
            author: altData.user_name || '',
            authorHandle: altData.user_screen_name || '',
          },
          videos,
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();

    // Extract video variants from syndication data
    const mediaDetails = data.mediaDetails || [];
    const videoMedia = mediaDetails.filter((m: any) => m.type === 'video' || m.type === 'animated_gif');

    if (videoMedia.length === 0) {
      // Check if there's video info in the main entity
      if (data.video?.variants) {
        const variants = data.video.variants
          .filter((v: any) => v.type === 'video/mp4')
          .sort((a: any, b: any) => (b.bitrate || 0) - (a.bitrate || 0))
          .map((v: any) => {
            const resMatch = v.src?.match(/\/(\d+)x(\d+)\//);
            return {
              url: v.src,
              quality: resMatch ? `${resMatch[2]}p` : 'SD',
              bitrate: v.bitrate || 0,
            };
          });

        return new Response(
          JSON.stringify({
            success: true,
            tweet: {
              text: data.text || '',
              author: data.user?.name || '',
              authorHandle: data.user?.screen_name || '',
            },
            videos: [{
              thumbnail: data.video?.poster || data.mediaDetails?.[0]?.media_url_https || '',
              type: 'video',
              variants,
              duration: data.video?.durationMs ? Math.round(data.video.durationMs / 1000) : null,
            }],
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Syndication returned OK but no video data — try vxtwitter as fallback
      console.log('Syndication had no video data, trying vxtwitter fallback for tweet:', tweetId);
      const altUrl2 = `https://api.vxtwitter.com/Twitter/status/${tweetId}`;
      const altResponse2 = await fetch(altUrl2, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      });

      if (altResponse2.ok) {
        const altData2 = await altResponse2.json();
        if (altData2.media_extended && altData2.media_extended.length > 0) {
          const videos2 = altData2.media_extended
            .filter((m: any) => m.type === 'video' || m.type === 'gif')
            .map((m: any) => ({
              url: m.url,
              thumbnail: m.thumbnail_url,
              type: m.type,
              duration: m.duration_millis ? Math.round(m.duration_millis / 1000) : null,
            }));

          if (videos2.length > 0) {
            return new Response(
              JSON.stringify({
                success: true,
                tweet: {
                  text: altData2.text || '',
                  author: altData2.user_name || '',
                  authorHandle: altData2.user_screen_name || '',
                },
                videos: videos2,
              }),
              { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }
        }
      }

      return new Response(
        JSON.stringify({ success: false, error: 'Este tweet não contém vídeos.' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const videos = videoMedia.map((media: any) => {
      const variants = (media.video_info?.variants || [])
        .filter((v: any) => v.content_type === 'video/mp4')
        .sort((a: any, b: any) => (b.bitrate || 0) - (a.bitrate || 0))
        .map((v: any) => {
          const resMatch = v.url?.match(/\/(\d+)x(\d+)\//);
          let quality = 'SD';
          if (resMatch) {
            const height = parseInt(resMatch[2]);
            if (height >= 1080) quality = '1080p';
            else if (height >= 720) quality = '720p';
            else if (height >= 480) quality = '480p';
            else if (height >= 360) quality = '360p';
            else quality = `${height}p`;
          }
          return {
            url: v.url,
            quality,
            bitrate: v.bitrate || 0,
          };
        });

      return {
        thumbnail: media.media_url_https || '',
        type: media.type === 'animated_gif' ? 'gif' : 'video',
        variants,
        duration: media.video_info?.duration_millis ? Math.round(media.video_info.duration_millis / 1000) : null,
      };
    });

    return new Response(
      JSON.stringify({
        success: true,
        tweet: {
          text: data.text || '',
          author: data.user?.name || '',
          authorHandle: data.user?.screen_name || '',
        },
        videos,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Erro interno ao processar o vídeo.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
