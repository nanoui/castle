/*
    CONVERT OUR CSV TO A JSON FILE WITH JSON FORMAT
*/
let csvToJson = require('convert-csv-to-json');

let fileInputName1 = 'relaisInfo.csv';
let fileOutputName1 = 'relaisInfo.json';

let fileInputName2 = 'relaisChef.csv';
let fileOutputName2 = 'relaisChef.json';

let fileInputName3 = 'michelin.csv';
let fileOutputName3 = 'michelin.json';

//generate JSON file

csvToJson.fieldDelimiter('~') .getJsonFromCsv(fileInputName1);
csvToJson.formatValueByType().getJsonFromCsv(fileInputName1);
csvToJson.generateJsonFileFromCsv(fileInputName1,fileOutputName1);

csvToJson.fieldDelimiter('~') .getJsonFromCsv(fileInputName2);
csvToJson.formatValueByType().getJsonFromCsv(fileInputName2);
csvToJson.generateJsonFileFromCsv(fileInputName2,fileOutputName2);

csvToJson.fieldDelimiter('~') .getJsonFromCsv(fileInputName3);
csvToJson.formatValueByType().getJsonFromCsv(fileInputName3);
csvToJson.generateJsonFileFromCsv(fileInputName3,fileOutputName3);
