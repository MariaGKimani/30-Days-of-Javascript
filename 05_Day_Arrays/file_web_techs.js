///////////////LEVEL3/////////////////////////////
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//sort the array and find the min and max age
// function age(ages){
//     if(ages.length <= 1){
//         return ages
//     }
//     let middle = Math.floor(ages.length/2)
//     let left =ages.slice(0,middle)
//     let right = ages.slice(middle)
//     return agex(ages(left),ages(right))
// }

// function agex(left,right){
//     const newAgex = []
//     while (left.length && right.length){
//         if(left[0] < right[0]){
//             newAgex.push(left.shift())
//         }else{
//             newAgex.push(right.shift())
//         }
        
//     }
//     console.log({newAgex})
//     return[...newAgex,...left,...right]
// }
console.log(ages.sort())
const xx = Math.max(...ages)
console.log(xx)
const xxx = Math.min(...ages)
console.log(xxx)
//Find the median age(one middle item 
// or two middle items divided by two)




//Find the average age(all items divided
// by number of items)




//Find the range of the ages(max minus min)








//Compare the value of (min - average) and (max - average), 
//use abs() method 1.Slice the first ten countries from
// the countries array




//Find the middle country(ies) in the countries array








//Find the middle country(ies) in the countries array




//Divide the countries array into two equal arrays if it is even.
// If countries array is not even , one more country for the first half.


