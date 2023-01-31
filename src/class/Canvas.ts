import { Symbol } from "./Symbol";

type TCanvas = {
  canvasWidth: number;
  canvasHeight: number;
  context: CanvasRenderingContext2D | null;
};

export class Canvas {
  canvasWidth!: number;
  canvasHeight!: number;
  context!: CanvasRenderingContext2D | null;
  fontSize: number;
  columns: number;
  symbols: any[];
  lastTime: number;
  requiredPassedTime: number;
  fps: number;
  time: number;
  animated: number;
  isChecked: boolean;

  constructor({ canvasWidth, canvasHeight, context }: TCanvas) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.context = context;
    this.fontSize = 0.8;
    this.columns = canvasWidth / this.fontSize;
    this.symbols = [];
    this.#init(this);
    this.animate();
    this.lastTime = 0;
    this.fps = 40;
    this.requiredPassedTime = 1000 / this.fps;
    this.time = 0;
    this.animated = 0;
    this.context.font = this.fontSize + "px monospace";
    this.isChecked = false;
  }

  getY() {
    this.isChecked = true;
  }

  #init(this) {
    [...Array(Math.floor(this.columns)).fill(0)].map(
      (_, i) =>
        (this.symbols[i] = new Symbol({
          x: i,
          y: 0,
          fontSize: this.fontSize,
          context: this.context,
          getY: this,
        }))
    );
  }

  animate = () => {
    this.symbols.forEach((symbol) => symbol.drawCircle());

    if (this.isChecked) {
      this.context.font = "35px monospace";
    }

    requestAnimationFrame(this.animate);
    console.log(this.isChecked);
  };
}
