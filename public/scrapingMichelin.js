
const request = require('request');
const cheerio = require('cheerio');

// write the results in a csv file
const fs = require('fs');
const writeStream = fs.createWriteStream('michelin.csv');
// headers in the csv
writeStream.write(`Restaurant name \n`);

/*
   scrap all the restaurants of the Michelin guide
   filter : France, 1 - 2 or 3 stars
*/

var page;
for (page=1; page<=35; page++) {
  request('https://restaurant.michelin.fr/restaurants/france/restaurants-michelin/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-' + page, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      //console.log(html);

      var $ = cheerio.load(html);

      const list = $('.poi-search-result');

      list.children().each((i, el) => {
        const restaurantName = $(el)
          .find('.poi_card-display-title')
          .text()
          .replace(/\s\s+/g, '');

        //console.log(restaurantName);

        //write row to csv
        writeStream.write(`${restaurantName} \n`);
      });
    }

    console.log('Scraping done...');
  });
}
