{
  ///Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.


  const sumArray = (param : number[]) : number => {
        let sum = 0;
        for(let i = 0 ; i < param.length ; i++){
            sum +=param[i]
        }
        return sum;
  }

  console.log(sumArray([10,20,40,40]))







}