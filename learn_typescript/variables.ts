var global_var:number=100

class Numberfamily{
    
    a=10// undefined variable type
    static b:number=20
    constructor(){
        console.log("instance variable inside constructor :",this.a)
        console.log("static variable b:",Numberfamily.b)
        
    }
    Show():void{
        var local_var:number=30;
        console.log("local variable=",local_var)
    }
}

var obj=new Numberfamily()
console.log("constructor called")
obj.Show()
console.log("global variable:",global_var)
console.log("static variable",Numberfamily.b)
console.log("class variable",obj.a)
