class Die {

  constructor(sides = 6) {
    this.sides = sides;
  }

  roll(){
    return Math.ceil(Math.random() * this.sides);
  }
}

module.exports = Die