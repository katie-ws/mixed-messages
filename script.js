let destination = ['Hawaii', 'Denmark', 'Maldives', 'Sri Lanka', 'Japan', 'South Africa', 'Italy', 'Hungary', 'Croatia', 'USA', 'Panama', 
'Argentina', 'Costa Rica', 'New Zealand', 'Thailand', 'Syria', 'Myanmar', 'Colombia', 'China', 'Antartica'];
let activity = ['go on safari', 
'swim with dolphins', 
'eat all the food', 
'have a holiday romance', 
'sunbathe', 
'drink cocktails', 
'take a pizza making class', 
'take a food tour', 
'end up in A&E', 
'take a selfie',
'go to a rave',
'make a lifelong friend',
'swim in the ocean',
'walk for miles',
'go on a hike',
'hit the shops',
'visit a museum',
'relax by the pool',
'ride a jetski',
'get mugged by a monkey'];
let person = ['Mum', 'Dad', 'sibling', 'boyfriend/girlfriend', 'husband/wife', 'boss', 'best friend', 'sworn enemy', 'ex', 'pet', 
'next door neighbour', 'high school sweetheart', 'imaginary friend', 'dentist', 'teacher', 'favorite colleague', 'Deliveroo driver', 
'hairdresser', 'worst colleague', 'grandparents'];

let randomDestination = destination[Math.floor(Math.random()*destination.length)];
let randomActivity = activity[Math.floor(Math.random()*activity.length)];
let randomPerson = person[Math.floor(Math.random()*person.length)];

console.log(`Your next holiday will be to ${randomDestination}. 
You will go with your ${randomPerson} and whilst there you will ${randomActivity}.`);