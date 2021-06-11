// 1 

function is_array(arr){
   return Array.isArray(arr);
}

console.log(is_array('w3resourse'));
console.log(is_array([1,2,4,0]));

// 2 

function array_Clone(arr){
  a = arr.slice(0)
  return a
}

array1 = [1,2,4,0]
array2 = [1,2,[4,0]]
console.log(array_Clone(array1))
array1.pop()
console.log(array1)
console.log(array_Clone(array2))
array2.push(3)
console.log(array2)

// 3 

function first(arr,n=1){
  if (n>0){
    return arr.slice(0,n)
  }
  else{
    return []
  }
}
console.log(first([7,9,0,-2]));
console.log(first([],3));
console.log(first([7,9,0,-2],3));
console.log(first([7,9,0,-2],6));
console.log(first([7,9,0,-2],-3));
console.log([7,9,0,-2].slice(0,-3));

// 4

myColor = ["Red","Green","White","Black"]
console.log(myColor.join(','));
console.log(myColor.join(','));
console.log(myColor.join('+'));

//5

var arr1 = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
var  maxCount=0;
var  maxValue=0;
var map = {};
for (var item in arr1){
  if (map[arr1[item]]==null){
    map[arr1[item]]=1;
  }
  else{
    map[arr1[item]]=map[arr1[item]]+1; 
  }
  if (map[arr1[item]] > maxValue) {
  maxValue = arr1[item];
  maxCount = map[arr1[item]];
  }
  
}

console.log(maxValue,"(",map[maxValue]," times )");

