"use strict"

class ChickenPen {

  constructor(chickens){
    if(!chickens)
      throw new Error("Must have chickens");
    this.chickens = chickens;
  }

  count(){
    return this.chickens.length;
  }

  add(chicken) {
    this.chickens.push(chicken);
  }

}

module.exports = ChickenPen;