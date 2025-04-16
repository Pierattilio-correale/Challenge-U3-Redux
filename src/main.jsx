import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./Redux/Store/index.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Provider è un componente react forinta dalla libreria di collegamento di redux
// che dovrebbe abbracciare tutta l'applicazione , in modo da
// fornire a tutti i componenti la capacità di accedere allo store
