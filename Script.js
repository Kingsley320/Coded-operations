function codedops(arr){
  var hold = [];
  for(i =0; i<arr.length; i++){
    if (typeof arr[i] == 'string'){
      hold.push(parseInt(arr[i]));
    }
    if (arr[i] == "c"){
        hold.pop(arr[i]);
      hold.pop(hold.length);
    }
    if (arr[i] == "d"){
        hold.pop(arr[i]);
        hold.push(2 * hold[hold.length-1]);
    }
    if (arr[i] == '+'){
        hold.pop(arr[i]);
      hold.push(5+ hold[hold.length-1]);
    }
  }
//   return hold
  summed(hold);
  
}
function summed(hold){
    var sum = 0;
  console.log(hold)
  for (j=0;j<=hold.length-1; j++){
    sum += hold[j];
  }
      console.log(sum);
//   return sum;
}
console.log(codedops(["5","2","c","d",'+']));
