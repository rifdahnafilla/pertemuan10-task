function formatName(nama) {
    const result = nama.toUpperCase();
    return result;
}


function getName(nama, callFormatName) {
    const result = callFormatName(nama);
    console.log(result);
}

/**
 * Arrow Function dengan single statement
 * const formatName = (nama) => nama.toUpperCase(); 
 * const getName = (nama, callFormatName) => console.log(callFormatName(nama));
 */

/**
 * annonymous Arrow function (es6)
 * const getName(nama, callFormatName) =>{
    const result = callFormatName(nama);
    console.log(result); };
 * getName("jasmine", (nama) => {
    const result = nama.toUpperCase();
    return result; });
 */

getName("jasmine", formatName);