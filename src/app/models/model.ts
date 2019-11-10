import { Height } from "./height";

export class Model {
  private _height: Height;
  constructor(
    public name = "Adama Cherif",
    public weight = 0,
    public hair = "Black",
    public eyes = "Brow",
    public dress = 4,
    public waist = 24,
    public bust = 34,
    public hips = 34,
    public shoe = 7,
    feet = 5,
    inches = 9
  ) {
    this._height = new Height(feet, inches);
  }

  get height(): string {
    return this._height.height();
  }
}
