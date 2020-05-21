const {ServiceBroker}=require('Moleculer')
let broker=new ServiceBroker()
broker.createService({
    name:"math",
    actions:{
        
            add(ctx){
            return Number(ctx.params.a)+Number(ctx.params.b) 
        
        }
    }
})
broker.start();
broker.call("math.add",{a:2,b:5})
.then(res=>{
    console.log(res)
})