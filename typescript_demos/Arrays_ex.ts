var alpha1=[1,2,3,4,5]
var beta=["toyota","volkswagon","marutu&suzuki"]
// console.log(alpha)
// var gamma=alpha.concat(beta)

// // concatenation
// var alpha = ["a", "b", "c"]; 
// var numeric = ["1", "2", "3"];
// var alphaNumeric = alpha.concat(numeric); 
// console.log("alphaNumeric : " + alphaNumeric );

//every
// function greaterthan0(element,index,array){
//     return element>0
// }
// console.log(alpha1.every(greaterthan0))

//filter

// function greaterthan3(element,index,array){
//     return element>3
// }
// console.log(alpha1.filter(greaterthan3))

//forEach

// alpha1.forEach((value)=>{
//     console.log(value)
// })

//indexOF

// var index=alpha1.indexOf(5)
// console.log(index)

// join 
// var joined_array=alpha1.join("+")
// console.log(joined_array)

//map

// var mapped_array=alpha1.map((ele)=>ele*2)
// console.log(mapped_array)

//pop and push
// alpha1.push(6)
// console.log(alpha1)
// console.log(alpha1.pop())

//reduce
// var reduced_array:number=alpha1.reduce((a,b)=>a*b)
// console.log(reduced_array)

//reverse
// var reverse_array:number[]=alpha1.reverse()
// console.log(reverse_array)

//shift

// var shifted_element=alpha1.shift()
// console.log(shifted_element)

//unshift

// var sizeafter_unshifted_element=alpha1.unshift(0)
// console.log(sizeafter_unshifted_element)

//sort

// var sorted_array=alpha1.sort().reverse()
// console.log(sorted_array)

//splice

// var splice_element=alpha1.splice(3,1)
// console.log(splice_element)
// console.log(alpha1)

//toString()

// var toString_array=alpha1.toString()
// console.log(toString_array)

//forin

// for(var j in beta){
//     console.log(beta[j])
// }

//multidimensional arrays
var twod_array:number[][]=[[1,2,3],[4,5]],i,j
for (i in twod_array){
    for(j in twod_array[i]){
        console.log(twod_array[i][j])
    }
}