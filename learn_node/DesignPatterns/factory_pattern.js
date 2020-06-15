function createEngineer(){
    const privateSkills={}
    const engineer={
        setSkill: (name,value)=>{
        if(!name || !value) throw new Error("inputs required!")
        privateSkills[name]=value
    },
    getSkill: name =>{
        if(!name) throw new Error("Name required!")
        return privateSkills[name];
    }
}
return engineer;
}

const engineer = createEngineer()
console.log(engineer);

engineer.setSkill('JS','High');
console.log(engineer.getSkill('JS'))
// console.log(engineer.getSkill())

console.log(engineer.privateSkills)