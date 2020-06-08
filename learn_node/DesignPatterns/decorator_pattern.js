    const User = function(name){
        this.name = name;
        this.say = ()=>{
            console.log(`User : ${this.name}`)
        }
    }

    const DecoratedUser = function(user,rank){
        this.user =user;
        this.rank=rank;
        this.say = ()=>{
            console.log(`Decorated USer => Name:${this.user.name}, Rank=>${this.rank}`)
        }
    }

    const user = new User('being human')
    user.say()
    const decoratedUser = new DecoratedUser(user,95551)
    decoratedUser.say()