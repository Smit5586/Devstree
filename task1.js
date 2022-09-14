var evens = (num) => {
    
    const str = num.toString();
    const result = [str[0]];
    for(let x=1; x<str.length; x++)
      {
        if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
         {
          result.push('|', str[x]);
         }
        else
         {
          result.push(str[x]);
         }
      }
      return result.join('');
    
  }

  console.log(evens(1234689));