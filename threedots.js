const ages = [15, 14, 16, 12];
const ages2 = [25, 29, 35];
const ages3 = [40, 45];
const allAges = ages.concat(ages2).concat([38]).concat(ages3);
const allAges2 = [...ages, ...ages2, 38, ...ages3];
// console.log(allAges);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250, 850];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);