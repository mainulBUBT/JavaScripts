//Regular function
//


//Arrow Function
// let number = (params) => {
//     return params;
// }

// let number = (params) => params;

// let number = (a, b) => a + b;

var javascript = {
    name: "javaScript",
    libraries: ['React', 'Vue', 'Angular'],
    printLibraries: function () {
        this.libraries.forEach((a) => console.log(`${ this.name } loves ${ a }`));
    },

};
// console.log(number(20, 10));
javascript.printLibraries();