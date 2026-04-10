const STORAGE_KEY = "twitterdown_history";

export interface DownloadHistoryItem {
  id: string;
  url: string;
  thumbnail: string;
  author: string;
  authorHandle: string;
  text: string;
  quality: string;
  type: string;
  downloadedAt: string;
}

export const getHistory = (): DownloadHistoryItem[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const addToHistory = (item: Omit<DownloadHistoryItem, "id" | "downloadedAt">) => {
  const history = getHistory();
  const newItem: DownloadHistoryItem = {
    ...item,
    id: crypto.randomUUID(),
    downloadedAt: new Date().toISOString(),
  };
  history.unshift(newItem);
  // Keep max 50 items
  const trimmed = history.slice(0, 50);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  return newItem;
};

export const clearHistory = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const removeFromHistory = (id: string) => {
  const history = getHistory().filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
};
