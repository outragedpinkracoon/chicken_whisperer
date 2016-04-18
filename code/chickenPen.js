class ChickenPen {

  constructor(chickens){    
    this.chickens = chickens;
  }

  count(){
    return this.chickens.length;
  }

  add(chicken) {
    this.chickens.push(chicken);
  }

  hasChickens(){
    for(var chicken of this.chickens)
    {
      if(chicken.speed > 0)
        return true;
    }
    return false;
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