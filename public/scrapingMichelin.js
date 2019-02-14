
const request = require('request');
const cheerio = require('cheerio');

// write the results in a csv file
const fs = require('fs');
const writeStream = fs.createWriteStream('michelin.csv');
// headers in the csv
writeStream.write(`Restaurant Name~ Nombre Etoile \n`);

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

        var nombreEtoile = "";

        if ($(el).find('.poi_card-display-guide').children().find('.guide-icon.icon-mr.icon-cotation1etoile').length > 0) {
          nombreEtoile = "1 etoile";
        }

        if ($(el).find('.poi_card-display-guide').children().find('.guide-icon.icon-mr.icon-cotation2etoiles').length > 0) {
          nombreEtoile = "2 etoiles";
        }

        if ($(el).find('.poi_card-display-guide').children().find('.guide-icon.icon-mr.icon-cotation3etoiles').length > 0) {
          nombreEtoile = "3 etoiles";
        }

        //console.log(restaurantName, nombreEtoile);

        //write row to csv
        writeStream.write(`${restaurantName}~ ${nombreEtoile} \n`);
      });
    }

    console.log('Scraping done...');
  });
}
