import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import { theme } from "./mui.config";

import store from "./store";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <SnackbarProvider
              hideIconVariant
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              maxSnack={3}
            >
              <App />
            </SnackbarProvider>
          </ThemeProvider>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
