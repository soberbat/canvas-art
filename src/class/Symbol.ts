import { text } from "./text";

interface CanvasProps {
  context: CanvasRenderingContext2D;
  fontSize: number;
  y: any;
  x: any;
  getY: any;
}

export class Symbol {
  context: CanvasRenderingContext2D;
  fontSize: number;
  getY: any;
  x: any;
  y: any;
  texts: any;
  canDrawCircle: any;

  constructor({ x, y, fontSize, context, getY }: CanvasProps) {
    this.context = context;
    this.fontSize = fontSize;
    this.x = x;
    this.y = y;
    this.texts = text;
    this.getY = getY;
    this.canDrawCircle = true;
  }

  drawCircle() {
    const text = this.texts.charAt(
      Math.floor(Math.random() * this.texts.length)
    );
    this.context.fillStyle = "white";
    this.context.fillText(
      text,
      this.x * Math.random() * 10 * this.fontSize,
      this.y * this.fontSize
    );

    if (this.y * this.fontSize > window.innerHeight && Math.random() > 0.2) {
      this.getY.getY();
      this.y = 0;
    } else {
      this.y += Math.random() * 10;
    }
  }
}
