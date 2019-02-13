/*
    CONVERT OUR CSV TO A JSON FILE WITH JSON FORMAT
*/
let csvToJson = require('convert-csv-to-json');

let fileInputName = 'relais.csv';
let fileOutputName = 'relais.json';

let fileInputName2 = 'michelin.csv';
let fileOutputName2 = 'michelin.json';

//generate JSON file

csvToJson.fieldDelimiter('~') .getJsonFromCsv(fileInputName);
csvToJson.formatValueByType().getJsonFromCsv(fileInputName);
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

csvToJson.fieldDelimiter('~') .getJsonFromCsv(fileInputName2);
csvToJson.formatValueByType().getJsonFromCsv(fileInputName2);
csvToJson.generateJsonFileFromCsv(fileInputName2,fileOutputName2);
