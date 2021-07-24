/* flatten object (Microsoft Interview)

const person = {
  name: "abc",
  address: {
    present: {
      area: "begumpet",
      city: "Hyderabad",
    },
    office: {
      area: {
        1: "hitech city",
        2: "gachibowli",
        3: "kondapur",
      },
      city: "Hyderabad",
    },
  },
};
let flattenObject=[]
const flatObject= (obj,parent)=>{
    for(let key in obj){
        if(typeof obj[key] == 'object'){
            flatObject(obj[key],parent+'>'+key)
        }else{
            flattenObject[parent+'>'+key]=obj[key]
        }
    }
}
flatObject(person,'person')
console.log(flattenObject)

*/