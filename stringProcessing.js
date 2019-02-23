var array = [];

function CheckWord(word,letter){
  var index = 0;
  while(index < word.length){
    
    if(word[index] == letter){
      array.push(index)
    }
     index += 1;
  }
  console.log(array)
 
//  if(letterX == letter){
//       console.log(letterX);
//   }
//    else{
//       console.log(false);
//   }
  
}

CheckWord("Balloon","o");
// function sum (parameter1, parameter2) {
//   sum = parameter1 + parameter2;
//   console.log(sum);

// }

// //sum(5, 8);
// sum(1, 8);