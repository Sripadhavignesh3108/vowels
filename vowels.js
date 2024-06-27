let stn="vignesh sripadha";
let stn1="";
let stn2="";
for(i=0;i<=stn.length-1;i++)
{
   if(stn[i]==="a" || stn[i]==="e" || stn[i]==="i" || stn[i]==="o" || stn[i]==="u") 
   {
      stn1+=stn[i]
   }
   else if(stn[i]!=="a" || stn[i]!=="e" || stn[i]!=="i" || stn[i]!=="o" || stn[i]!=="u")
   {
stn2+=stn[i]
   }
} 
console.log('Total Vowels in your Text is: '+stn1.length) 
console.log('Total consonents in your Text is: '+stn2.length)
