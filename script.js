const PI = 3.1415;
const plantRadius = 5;
const Area = PI * plantRadius * plantRadius;

let minPlantSpace = 0.8;
const startingPlants = 20;

// Plant growth
let plants1 = startingPlants;
plants1 = plants1 * 2;
console.log('Plants Week 1: ', plants1);

let plants2 = plants1 * 2;
console.log('Plants Week 2: ', plants2);

let plants3 = plants2 * 2;
console.log('Plants Week 3: ', plants3);

// Maximum capacity
const maxPlants = Area / minPlantSpace;
console.log('Capacity: ', maxPlants);

const eightyPercentOfMax = maxPlants * 0.8;
console.log('80% of Capacity: ', eightyPercentOfMax);


// ---------------- WEEK 1 ----------------

let percent1 = plants1 / maxPlants;
console.log('Week 1 % of Total Capacity: ', percent1);

if (percent1 > 0.8) {
    console.log("Action: Pruned");
}
else if (percent1 >= 0.5 && percent1 <= 0.8) {
    console.log("Action: Monitored");
}
else {
    console.log("Action: Planted");
}


// ---------------- WEEK 2 ----------------

let percent2 = plants2 / maxPlants;
console.log('Week 2 % of Total Capacity: ', percent2);

if (percent2 > 0.8) {
    console.log("Action: Pruned");
}
else if (percent2 >= 0.5 && percent2 <= 0.8) {
    console.log("Action: Monitored");
}
else {
    console.log("Action: Planted");
}


// ---------------- WEEK 3 ----------------

let percent3 = plants3 / maxPlants;
console.log('Week 3 % of Total Capacity: ', percent3);

if (percent3 > 0.8) {
    console.log("Action: Pruned");
}
else if (percent3 >= 0.5 && percent3 <= 0.8) {
    console.log("Action: Monitored");
}
else {
    console.log("Action: Planted");
}


// ================= PART 2 =================

const startPlants2 = 100;
const weeks = 10;

// Plant growth after 10 weeks
const plantsAfter10Weeks = startPlants2 * (2 ** weeks);

console.log('\nPlants After 10 Weeks: ', plantsAfter10Weeks);

// Area needed
const requiredArea = plantsAfter10Weeks * minPlantSpace;

console.log('Required Area: ', requiredArea);

// Radius needed for new circular garden
const newRadius = Math.sqrt(requiredArea / PI);

console.log('New Garden Radius: ', newRadius);


// ================= PART 3 =================

try {
    const originalGardenCapacity = Area / minPlantSpace;
    const currentPlants = 100;

    if (currentPlants > originalGardenCapacity) {
        throw new Error(
            "Not enough space in the original garden for 100 plants."
        );
    }

    console.log("There is enough room for the plants.");
}

catch (error) {
    console.log("Error: " + error.message);
}