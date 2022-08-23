const business = 1600;
const minister = 850;
const army = 900;
if(business > minister && business > army){
    console.log('busniness is begger')
}
else if(minister > business && minister > army){
    console.log('minister is begger')
}
else{console.log('army is begger')}

//short way//

var max = Math.max(business,minister,army)
console.log(max)