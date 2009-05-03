jQuery.noConflict(); j = jQuery;
function cl(s) { if (typeof(console) != 'undefined') {console.log(s) } };

function getKey(obj){
   for(i in obj ) if (obj.hasOwnProperty(i)) return i;
}

function getValue(obj, key){
  eval("data = obj."+key);
  return data;
}

function data2item(data){
  var key = getKey(data);
  var item = getValue(data, key);    
  return item;
}

function data2array(hash){
  var array = [];
  hash.forEach(function(data){
    array.push(data2item(data));
  })
  return array;
}

String.prototype.capitalize = function(){ //v1.0
    return this.replace(/\w+/g, function(a){
        return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
    });
};

String.prototype.singularize = function(){ //v1.0
    return this.replace(/\w+/g, function(a){
        return a.slice(0,-1);
    });
};



Array.prototype.index = function(val) {
  for(var i = 0, l = this.length; i < l; i++) {
    if(this[i] == val) return i;
  }
  return null;
};

Array.prototype.include = function(val) {
  return this.index(val) !== null;
};