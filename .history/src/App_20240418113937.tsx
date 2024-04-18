import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";

function App() {
  return (
    <div>
      <TonConnectButton />
    </div>
  );
}

export default App;
