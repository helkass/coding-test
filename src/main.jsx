import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import "react-responsive-carousel/lib/styles/carousel.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <ChakraProvider theme={theme}>
         <App />
      </ChakraProvider>
   </React.StrictMode>
);
