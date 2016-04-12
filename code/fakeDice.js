"use strict"

class Dice {

  constructor(results) {
    this.results = results;
  }

  roll(){
    return this.pop();
  }
}

module.exports = Dice