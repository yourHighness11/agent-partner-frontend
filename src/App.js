import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Partners from "./Components/Partners";
import Message from "./Components/Message";
import UserPanel from "./Components/UserPanel";
import CreateMessage from "./Components/CreateMessage";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/:agentId" Component={Partners} />
          <Route path="/" Component={Home} />
          <Route path="/:partnerId/get-messages" Component={Message} />
          <Route path="/user-panel" Component={UserPanel} />
          <Route path="/:partnerId/create-message" Component={CreateMessage} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
