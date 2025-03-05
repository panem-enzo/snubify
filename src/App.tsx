import { useState } from "react";
import "./App.css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { Separator } from "./components/ui/separator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Snubify</h1>
        <p>The reliable tool that let's you listen to unreleased tracks on spotify</p>
      </div>
    </>
  );
}

export default App;
