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

  //TODO why does lodash not work with _.remove?
  remove(chicken_out) {
    var result = [];
    for(chicken of this.chickens)
    {
      if(chicken !== chicken_out)
        result.push(chicken);
    }
    this.chickens = result;
  }

}

module.exports = ChickenPen;