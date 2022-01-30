var num=prompt("Enter a number");
var num1=parseInt(num);
var a=0;
var b=1;
var sum=a+b;
console.log(a);
console.log(b);
for(var i=1; i<num1; i++){
    console.log(sum)
    a=b;
    b=sum;
    sum=a+b; 
    
}