import ColorBlock from "./ColorBlock";
import ColorInput from "./ColorInput";
import { useState } from "react";
import RCPTitle from "./RCPTitle";

function App() {
  const [colorVal, setColorVal] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <RCPTitle />
      <ColorBlock colorVal={colorVal} isDarkText={isDarkText} />
      <ColorInput colorVal={colorVal} setColorVal={setColorVal} isDarkText={isDarkText} setIsDarkText={setIsDarkText} />
    </div>
  );
}

export default App;
