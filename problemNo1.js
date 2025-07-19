//[function name dite hbe AnaToVori]: ekta function e perameter hishebe nite hbe (Ana). tarpor shetar vhetor vori te 
//covert kore koto man hoy shei sonkha return korte hbe sudhu sonkha;




function AnaToVori (Ana){
      if(typeof Ana !== 'number'|| Ana<0){
            return 'please provide a valid integer number';
      }
      const Vori = Ana *0.0625;
      return Vori;
}
console.log(AnaToVori(5));