import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import store from "./redux/store/index.ts";
// import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(<App />);
