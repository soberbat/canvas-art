import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Canvas } from "./class/Canvas";

function App() {
  const [count, setCount] = useState(0);

  const cRef = useCallback((ref: HTMLCanvasElement) => {
    const context = ref.getContext("2d");

    (context as CanvasRenderingContext2D).imageSmoothingEnabled = false;

    const CCanvas = new Canvas({
      canvasHeight: window.innerHeight,
      canvasWidth: window.innerWidth,
      context,
    });
  }, []);

  return (
    <div className="App">
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        className="canvas"
        ref={cRef}
      ></canvas>
    </div>
  );
}

export default App;
