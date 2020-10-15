function numConverter (num,res) {
    
  const oneToNineTeen = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  const tenToNinety = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  const bigNums = ['', 'thousand', 'million', 'billion', 'trillion'];
  let wordOfNums = '';
  for (let i = 0; i < bigNums.length; i++) {
    let x = num%(100*Math.pow(1000,i));
    console.log(x) //getting the last two numbers
    
    
  }
document.getElementById(res).innerHTML = wordOfNums;
      
  }