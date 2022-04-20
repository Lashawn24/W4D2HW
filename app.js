//Falsey bouncer

function bouncer(arr) {
    let newArray= [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i]){
        newArray.push(arr[i]);
      }
    }
    return newArray;
  }
  
  bouncer([7, "ate", "", false, 9]);






//Chunky Monkey

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    
    for(let i = 0; i < arr.length; i+= size){
      newArr.push(arr.slice(i,i+size));
    }
    return newArr;


  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);