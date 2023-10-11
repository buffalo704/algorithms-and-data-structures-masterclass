function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    // console.log(Array.isArray(arr));
    let newArr = [];
  for (let i=0; i< arr.length; i++){
      
      let firstLetter = arr[i][0];
       newArr.push(`${firstLetter.toUpperCase()}${arr[i].slice(1)}`)      
  }
  return newArr;
  }
  
  console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
  