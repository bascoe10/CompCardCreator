import { Height } from "./height";

export class Model {
  private _height: Height;
  constructor(
    public name = "Adama Cherif",
    public weight = 0,
    public hair = "Black",
    public eyes = "Brown",
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

  set height(value: string) {
    let match_groups = value.match(/^(?<feet>\d)'(?<inches>\d{1,2})"/);
    if (!match_groups) return;
    let { feet, inches } = match_groups.groups;
    this._height.feet = parseInt(feet);
    this._height.inches = parseInt(inches);
  }

  attributes() {
    return [
      "height",
      "weight",
      "hair",
      "eyes",
      "dress",
      "waist",
      "bust",
      "hips",
      "shoe"
    ];
  }
}
