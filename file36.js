//object destructuring 
const band = {
    bandName : "one direction",
    famousSong :"perfect",
    year : 2011,
    anotherfamoussong : "What makes you beautiful"
};

// const bandName = band.bandName ;
// const famousSong = band.famousSong;

// console.log(bandName, famousSong);

//shortcut
// const {bandName : var1, famousSong : var2} = band;
// //bandName = "queen"; ->using let only 
// console.log(var1);
// console.log(var2);


const {bandName, famousSong,...restProps} = band ; 
console.log(bandName);
console.log(restProps);
