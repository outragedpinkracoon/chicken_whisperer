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

  //TODO why does lodash not work with _.remove? halp.
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