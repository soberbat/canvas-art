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
  y: number;
  x: number;
  symbols: Symbol[];
  animationID: any;
  timeoutId: any;
  now: number;
  delta: number;
  symbolsCount = 0;
  then = Date.now();
  fps = 20;
  interval = 1000 / this.fps;

  constructor({ canvasWidth, canvasHeight, context }: TCanvas) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.context = context;
    this.fontSize = 5;
    this.symbols = [];
    this.#init();
    this.animate();
  }

  adjustFont(increase: boolean) {
    increase ? (this.fontSize += 0.8) : (this.fontSize -= 0.8);
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  clearCanvas() {
    this.context.fillStyle = "rgba(255, 255, 255, 1)";
    this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);

    cancelAnimationFrame(this.animationID);
    clearTimeout(this.timeoutId);

    this.symbolsCount = 0;
    this.symbols = [];
    this.fontSize = 5;

    this.#init();
    this.animate();
  }

  randColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  };

  #init(this: any) {
    this.symbolsCount += 10;
    const isVertical = Math.random() < 0.5 ? true : false;

    this.y = this.getRandomArbitrary(0, window.innerHeight - 0);
    this.x = this.getRandomArbitrary(window.innerWidth - 0, 0);
    const color = this.randColor();
    this.context.font = this.fontSize + "px monospace";

    [...Array(10).fill(0)].map(
      (_, i) =>
        (this.symbols[i + this.symbolsCount] = new Symbol({
          x: this.x,
          y: this.y,
          isVertical,
          context: this.context,
          color,
        }))
    );

    this.timeoutId = setTimeout(() => {
      this.#init(this);
    }, 500);
  }

  animate = () => {
    this.now = Date.now();
    this.delta = this.now - this.then;

    if (this.delta > this.interval) {
      this.context.fillStyle = "rgba(0,0,0, 0.07)";
      this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);

      this.symbols.forEach((symbol) => symbol.drawCircle());

      this.context.font = `${this.fontSize}px monospace`;

      this.then = this.now - (this.delta % this.interval);
    }

    this.animationID = requestAnimationFrame(this.animate);
  };
}
