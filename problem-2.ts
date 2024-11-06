{
  //Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    const removeDuplicates = (arrOfNum : number[]):number[] => {
        return arrOfNum.filter((elm,indx) => arrOfNum.indexOf(elm) === indx)
    }

    console.log(removeDuplicates([1,2,2,3,4,4,4,5]))







}