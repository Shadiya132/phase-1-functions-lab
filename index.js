// Code your solution in this file 
function distanceFromHqInBlocks(someValue){
   if (someValue >= 42){
   return (someValue - 42) 
} else {
    return (42 - someValue)
}
}
distanceFromHqInBlocks()

function distanceFromHqInFeet(someValue){
    const blocks = distanceFromHqInBlocks
    return distanceFromHqInBlocks(someValue)*264
}
distanceFromHqInFeet()

function distanceTravelledInFeet(start, destination){
    if (destination > start) {
        return (destination - start)*264
} else (destination < start) 
    return (start - destination)*264
}
distanceTravelledInFeet()

function calculatorFarePrice(start, destination) {
    if((start - destination)*264 < 400) {
      return  0
    } else if (distanceTravelledInFeet()*0.02 >= 400 && distanceTravelledInFeet()*0.02 <=2000) {
        return 2.56
    } 
}
calculatorFarePrice()