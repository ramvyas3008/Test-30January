var num=parseInt(prompt("enter a number"));
if(isNaN(num)){
     alert("Please enter a valid number");
}
    else if(num==1){
        console.log(num + " is not prime nor composition number");
    }
    else if(num<1){
        console.log(num + " is not prime number");
    
    }else { 
       for(var i=2; i<num; i++){
            if(num%i==0){ 
                 
                  var a=`${num} is not prime number`;
                  break;     
            } else{
                  var a=`${num} is  prime number`;
                  
              }
        }
        console.log(a); 
 }