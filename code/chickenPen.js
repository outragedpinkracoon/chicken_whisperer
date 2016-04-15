var _ = require('lodash');

class ChickenPen {

  constructor(chickens){
    if(!chickens) {
      throw new Error("Must have chickens");
    }
    
    this.chickens = chickens;
  }

  count(){
    return this.chickens.length;
  }

  add(chicken) {
    this.chickens.push(chicken);
  }

  remove(chicken_out) {
    var result = [];
    for(var chicken of this.chickens)
    {
      if(chicken !== chicken_out)
        result.push(chicken);
    }
    this.chickens = result;
  }

  scareChickens(){
    this.chickens.forEach(function(chicken, index){
      chicken.scare();
    });
  }


}

module.exports = ChickenPen;