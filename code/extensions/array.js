Array.prototype.rotate = function(){
  var result = [];
  var self = this;
  this.forEach(function(element,index){
    if(index === 0)
      result[self.length - 1] = element;
    else
      result[index - 1] = element;
  })
  return result;
}

Array.prototype.first = function(){
  return this[0];
}