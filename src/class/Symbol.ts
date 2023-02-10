import { text } from "./text";

interface CanvasProps {
  y: number;
  x: number;
  color: string;
  isVertical: boolean;
  context: CanvasRenderingContext2D | null;
}

export class Symbol {
  x: number;
  y: number;
  color: string;
  isVertical: boolean;
  texts: string;
  context: CanvasRenderingContext2D;

  constructor({ x, y, isVertical, context, color }: CanvasProps) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.isVertical = isVertical;
    this.texts = text;
    this.context = context;
  }

  drawCircle() {
    const text = this.texts.charAt(
      Math.floor(Math.random() * this.texts.length)
    );

    this.context.fillStyle = this.color;

    this.context.fillText(
      text,
      this.x * (this.isVertical ? Math.random() : 1),
      this.y * (!this.isVertical ? Math.random() : 1)
    );
  }
}
