function addNumber(a:number,b:number):number{
    return a+b;
}
const addition=(c:number,d:number):number=>{
    return c+d;
}
const operation=(Operation:string):string=>`We are performing ${Operation} operation`;
console.log(operation('Addition'));
console.log(addNumber(10,20));
console.log(addition(-50,10));