
const request = require('request');
const cheerio = require('cheerio');

// write the results in a csv file
const fs = require('fs');
const writeStream = fs.createWriteStream('relais.csv');
// headers in the csv
writeStream.write(`Name, Link \n`);

/*
   scrap the sitemap in "List of Relais & Chateaux's properties" = the etablissements
   In this list of etablissement, we are interested in the division "France", listing the french hotels and restaurants
*/

request('https://www.relaischateaux.com/us/site-map/etablissements', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    //console.log(html);

    var $ = cheerio.load(html);

    // all the li in the ul = list of etablissements in France
    const list = $('#countryF').next().children().next();
    //console.log(list.html());

    // to get only the name and link
    list.children().each((i, el) => {
      const name = $(el)
        .find('a')
        .first()
        .text()
        .replace(/\s\s+/g, ''); //to delete the blank space that are useless

      const link = $(el)
        .find('a')
        .first()
        .attr('href');

      //console.log(name, link);

      //write row to csv
      writeStream.write(`${name}, ${link} \n`);
    });

    console.log('Scraping done...');
  }
});
