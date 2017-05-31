var count = 100;

while (count < 201){
  if(count % 3 === 0){
    if(count % 4 === 0){
      console.log("LoopyLighthouse");
      count++;
    }
    console.log("Loopy");
    count ++;
  }
  if(count % 4 === 0){
    console.log("Lighthouse");
    count++;
  }
  else{
    console.log(count);
    count++;
  }
}

//   if(count % 4 === 0 && count % 3 !== 0){
//     console.log("Lighthouse");
//     count++;
//   }

//   if(count % 4 === 0 && count % 3 === 0){
//     console.log("LoopyLighthouse");
//     count++;
//   }

//   if(count % 4 !== 0 && count % 3 !== 0){
//     console.log(count);
//     count++;
//   }
// }