const wakeUp = () => 'Acordando!!';
const drinkCoffee = () => 'Bora tomar café!!';
const goToSleep = () => 'Partiu dormir!!';

const doingThings = (func) => { console.log(func()); }

doingThings(wakeUp);
doingThings(drinkCoffee);
doingThings(goToSleep);
