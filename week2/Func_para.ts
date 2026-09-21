function Welcome(greet:string) :string{
    return `Welcome ${greet}`;
}
function FavouriteFood(food: string="Biryani"):void{
    console.log(`My favourite food is ${food}`);
}
function studDetails(Name: string,age?:number):void{
    console.log("Student Name:",Name);
    if(age){
        console.log("Student age:",age);
    }
}
function restParameters(Name:string,...marks:number[]):void{
    let ans:number=marks.reduce((total,curr)=>total+curr,0);
    console.log(`Student Name:${Name} ,Total marks:${ans}`);
}
console.log(Welcome("Palasa"));
FavouriteFood();
FavouriteFood("Dosa");
studDetails("Devaki",20);
studDetails("Dev");
restParameters("Devaki",10,20,30);
restParameters("Devaki",10,20,30,40,50,60);

