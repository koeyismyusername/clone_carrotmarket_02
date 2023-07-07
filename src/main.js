import "./app.css";
import App from "./App.svelte";
import "../firebase.config";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
