const germents = 100;
const privetjob = 10000;
const govjob = 16000;

/* var min = Math.min(germents,privetjob,govjob)
// console.log(min) */

if(germents > privetjob && germents>govjob){
    console.log('germents smaller')
}
else if(privetjob > germents && privetjob > govjob){
    console.log('privet is smaller')
}
else{console.log('govment is smaller')}


