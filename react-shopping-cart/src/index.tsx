import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

const container = document.getElementById("root") as HTMLElement;
const rootContainer = ReactDOM.createRoot(container);
rootContainer.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);
