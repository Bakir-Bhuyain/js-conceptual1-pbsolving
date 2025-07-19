/**
 * [function name dite hbe picnicBudget ]:perameter hishebe nibe ko jon picnic e jabe she sonkha .
 * 
 * jodi 100 jon ba tar kom jay tahole prottek er jonno khoroch hbe 5000 tk kore.
 * 
 * jodi 100 ba tar beshi kintu 200 er  kom ba shoman jay tahole protho 100 jon er proti jon 5000 tk kore dite hbe.
 * ar 100 er beshi mane (101 no theke )joto jon ache tader prottek er jonno 4000 tk kore dite hbe .
 * 
 * ar jodi 200 er beshi jay tahole first 100 jon proti jon er jonno 5000 tk kore dite hbe .ar 100 er beshi joto jon ache 
 * tader prottek er jonno 4000 tk dite hbe .ar bakii 200 er beshi means (201 no theke) joto jon ache tader prottek er jonno 
 * 3000 tk kore dite hbe.
 * 
 * elhn ami ekta parameter dibo, jetar sonkha j kono hote pare,shei sohna theke tmi function theke return dibe koto tk picnic 
 * er budget hote hobe.input parameter sonkha ta 100 er kom hote pare , 100-200 er moddhe hote pare ,abr 200 er behsio hote 
 * pare.tai shob case valo vabe test kore nibe.
*/

function picnicBudget(participants){
      if (typeof participants !== 'number'|| participants < 0){
            return 'participants should be a valid positive number';
      }else{
      let first100Cost = 0;
      let second101To200Cost = 0;
      let remainingCost = 0;
      let totalCost = 0;

            if (participants <= 100){
                  first100Cost = participants * 5000;
                  return first100Cost;
            }else if(participants <= 200){
                  first100Cost = 5000*100;
                  remainingCost = (participants - 100)*4000;
                  total = first100Cost + second101To200Cost;
                  return total; 
            }else{
                  first100Cost = 5000*100;
                  second101To200Cost = 400*100;
                  remainingCost = (participants -200) * 3000;
                  total = first100Cost + second101To200Cost + remainingCost;
                  return total;
            }
      }
}
console.log(picnicBudget(201));