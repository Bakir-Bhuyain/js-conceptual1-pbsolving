/* [function name dite hbe PandaCost]: 3 ti perameter lagbe
*1 ti singara er dam 7 tk
1 ti somucha er dam 10 tk
1 ti jilapi dam 15 tk
ekhn she jodi vibhinno sokhnar singara ,somucha, jilapi er order dey tahole total koto
tk khoroch hbe *holo shei sonkha return korbe;
*/

function PandaCost (singara , samucha, jilapi){

      if(typeof singara !=='number'|| typeof samucha!== 'number'|| typeof jilapi !== 'number'){
            return "please provide a valid integer number";
      }else if (singara<0||samucha<0||jilapi<0){
            return 'all positive number'
}else{
         const singaraPrice = 7;
      const samuchaPrice = 10;
      const jilapiPrice = 15;
      

      const total =
      singara*singaraPrice + samucha*samuchaPrice + jilapi*jilapiPrice ;

      return total;
}
}
console.log(PandaCost(1,2,1));