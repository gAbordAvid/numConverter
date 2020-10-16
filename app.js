function numConverter (num,res) {
    
  const oneToNineTeen = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  const tenToNinety = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  const bigNums = ['', 'thousand', 'million', 'billion', 'trillion'];
  let wordOfNums = '';
  for (let i = 0; i < bigNums.length; i++) {
    let x = num%(100*Math.pow(1000,i));
    
    //getting everything except 'hundreds' 
    if (Math.floor(x/Math.pow(1000,i)) !== 0) {

      //if input number is below 20 (oneToNineTeen)   1 => 19
      if (Math.floor(x/Math.pow(1000,i)) < 20) {
       wordOfNums = oneToNineTeen[Math.floor(x/Math.pow(1000,i))] + bigNums[i] + ' ' +wordOfNums;
      
      }
      /*if input is 20 or above 20 BUT this not includes the word "hundred"
        123456 => twenty-three thousand fifty-six we dont have hundreds yet

        looking backwards
      */
      else {
       wordOfNums = tenToNinety[Math.floor(x/(10*Math.pow(1000,i)))] + '-' + oneToNineTeen[Math.floor(x/Math.pow(1000,i))%10] + bigNums[i] + ' ' +wordOfNums;
    
      }
      /*getting the word "hundreds" searching backwards
        
        123456 => one hundred four hundred
      */ 
        x = num%(Math.pow(1000,i+1));
        if (Math.floor(x/(100*Math.pow(1000,i))) !== 0)wordOfNums = oneToNineTeen[Math.floor(x/(100*Math.pow(1000,i)))] + 'hundred ' +wordOfNums;
        
    }
    
  }

    
  document.getElementById(res).innerHTML = wordOfNums;
    
    
      
  }

      
  