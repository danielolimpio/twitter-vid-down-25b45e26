import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Recupera automaticamente de chunks JS/CSS deletados durante o deploy
// (evita tela branca em usuários com HTML em cache que aponta para hashes antigos)
const reloadOnChunkError = (msg: string) => {
  if (/Loading chunk|Loading CSS chunk|Failed to fetch dynamically imported module|Importing a module script failed/i.test(msg)) {
    const key = "__chunk_reload_once__";
    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, "1");
      window.location.reload();
    }
  }
};
window.addEventListener("error", (e) => reloadOnChunkError(e.message || ""));
window.addEventListener("unhandledrejection", (e) => reloadOnChunkError(String(e.reason?.message || e.reason || "")));

createRoot(document.getElementById("root")!).render(<App />);
