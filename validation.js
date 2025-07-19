//j input ta dicchi sheta shothik kina;

function add (x,y){
      if (typeof x !== "number" ||typeof y !== "number") {
            return 'thik thak number de ';
      }
      return x+y;
}

console.log(add(4,5));

//ekta object receive korbe object er upor vhitti  kore shei object er value gula jog kore dibe

// function details(info){
//       if(typeof info !== 'object' || !info.name || !info.age){
//             return "thik object dao";
//       }
//       return `My name is: ${info.name} .my age is ${info.age}`;
// }
// console.log(details({name: 'bakir', age : 24}));

function details(info){
      if(typeof info !== 'object'){
            return 'thik thak object dao';
      }else if(!info.name || !info.age){
            return 'thik thak object deo';
      }else if(typeof info.name !== 'string' || typeof info.age !== 'number'){
            return'name should be string age should be number'
      }
      return `My name is ${info.name}. My age is ${info.age}`;
}
console.log(details({name: 'Bakir', age: 24}))