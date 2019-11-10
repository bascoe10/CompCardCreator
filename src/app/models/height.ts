export class Height {
  constructor(public feet: number, public inches: number) {}

  height() {
    return `${this.feet}' ${this.inches}"`;
  }
}
