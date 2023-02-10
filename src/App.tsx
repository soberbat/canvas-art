import { useCallback, useRef } from "react";
import "./App.css";
import { Canvas } from "./class/Canvas";

import Buttons from "./components/Buttons/Buttons";

function App() {
  const canvasClassRef = useRef<Canvas | null>(null);

  const cRef = useCallback((ref: HTMLCanvasElement) => {
    const context = ref.getContext("2d");

    (context as CanvasRenderingContext2D).imageSmoothingEnabled = false;

    canvasClassRef.current = new Canvas({
      canvasHeight: window.innerHeight,
      canvasWidth: window.innerWidth,
      context,
    });
  }, []);

  const handleFontClick = (increase: boolean) =>
    canvasClassRef?.current?.adjustFont(increase);

  const handleReset = () => canvasClassRef?.current?.clearCanvas();

  return (
    <div className="App">
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        className="canvas"
        ref={cRef}
      />
      <Buttons handleFontClick={handleFontClick} handleReset={handleReset} />
    </div>
  );
}

export default App;
