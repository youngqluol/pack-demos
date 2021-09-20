export const a = Promise.resolve().finally();

export class Roll {
  constructor(name) {
    this.name = name;
    console.log('roll up');
  }

  getName() {
    return this.name;
  }
}
