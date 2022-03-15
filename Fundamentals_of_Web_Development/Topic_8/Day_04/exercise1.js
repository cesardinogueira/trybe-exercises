const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  /* function flatten(accumulator, currentValue){ //meu código
      return accumulator + currentValue.reduce((total, valorArray) => total + valorArray, [])}; */

  /* function flatten(arr) { //https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays
        return arr.reduce(function (flat, toFlatten) {
            console.log(toFlatten);
          return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
        }, []);
    } */

  /* const soloArray2 = arrays.reduce((flat, toFlatten) => { //código modificado por mim
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []); */

  /* function flatten(arr) { //código modificado por mim
  return arr.reduce(function (flat, toFlatten) {
      console.log(toFlatten);
    return flat.concat(toFlatten);
  }, []);
} */

const soloArray = arrays.reduce((futureArray, currentArrayItem) => futureArray.concat(currentArrayItem),
 []);
  
  //const soloArray = flatten(arrays);

  console.log(soloArray);