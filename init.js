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
