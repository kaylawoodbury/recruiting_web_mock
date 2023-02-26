import "react-perfect-scrollbar/dist/css/styles.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-quill/dist/quill.snow.css";
import "nprogress/nprogress.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { StyledEngineProvider } from '@mui/material';

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StyledEngineProvider>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById("root")
);
