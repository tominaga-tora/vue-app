export default class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }
  getArea() {
    return (this.base * this.height) / 2;
  }
  doubleBase() {
    this.base = this.base * 2;
  }
}
