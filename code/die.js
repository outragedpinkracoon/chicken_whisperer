"use strict"

class Die {

  constructor(sides) {
    if(!sides) {
      this.sides = 6;
    } else {
      this.sides = sides;
    }
  }

  roll(){
    return Math.ceil(Math.random() * this.sides);
  }
}

module.exports = Die