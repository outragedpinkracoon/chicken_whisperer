class Die {

  constructor(sides = 6) {
    this.sides = sides;
  }

  roll(){
    return Math.ceil(Math.random() * this.sides);
  }

  rollAndReduce(times = 2, func) {
    
    if(func == undefined) {
      func = (x,y) => x + y;
    }

    var results = this.rollMultiple(times)
    
    return results.reduce((prev,curr) => func(prev,curr));
  }

  rollMultiple(times = 2){
    var results = [];
    for(var i = 0; i < times; i++)
    {
      results.push(this.roll());
    }
    return results;
  }

}

module.exports = Die