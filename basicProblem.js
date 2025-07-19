//sobceye boro number retur korte hbe

function findLargest(values){
      if(!Array.isArray(values)){
            return 'provide an array';
      }

      let max = values[0];
      for (let i = 1 ; i<values.length ; i++){
            if(typeof values[i] !=="number"){
                  return 'all value should be a number ';
            }
            if (values[i] > max){
                  max = values[i];
            }
      }
      return max;

}

const numbers = [33,43,23,45,false,'67',89,43];
console.log(findLargest(numbers));