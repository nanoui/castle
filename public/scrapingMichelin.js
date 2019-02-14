
const request = require('request');
const cheerio = require('cheerio');

// write the results in a csv file
const fs = require('fs');
const writeStream = fs.createWriteStream('michelin.csv');
// headers in the csv
writeStream.write(`Chef~ Zipcode~ Number Of Stars~ Link \n`);

/*
   scrap all the restaurants of the Michelin guide
   filter : France, 1 - 2 or 3 stars
   Purpose : get zipcode and chef of each starred restaurants
*/

var page;
for (page=1; page<=35; page++) {
  request('https://restaurant.michelin.fr/restaurants/france/restaurants-michelin/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-' + page, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      //console.log(html);

      var $ = cheerio.load(html);

      const list = $('.poi-search-result');

      list.children().each((i, el) => {
        const link = $(el)
          .find('a')
          .first()
          .attr('href');

        const restaurantLink = 'https://restaurant.michelin.fr' + link ;


        var stars = "";

        if ($(el).find('.poi_card-display-guide').children().find('.guide-icon.icon-mr.icon-cotation1etoile').length > 0) {
          stars = "1 star";
        }

        if ($(el).find('.poi_card-display-guide').children().find('.guide-icon.icon-mr.icon-cotation2etoiles').length > 0) {
          stars = "2 stars";
        }

        if ($(el).find('.poi_card-display-guide').children().find('.guide-icon.icon-mr.icon-cotation3etoiles').length > 0) {
          stars = "3 stars";
        }


        request(restaurantLink, (error, response, html) => {
          if (!error && response.statusCode == 200) {

            var c = cheerio.load(html);

            const zipcode = c('.poi_intro-display-address').find('span[class="postal-code"]').text().replace(/\s\s+/g, '');
            const chefName = c('.field.field--name-field-chef.field--type-text.field--label-above').find('.field__item.even').text().replace(/\s\s+/g, '');

            //console.log(stars, zipcode, chefName, restaurantLink);

            //write row to csv
            writeStream.write(`${chefName}~ ${zipcode}~ ${stars}~ ${restaurantLink} \n`);
          }
        })
      });
    }

    console.log('Scraping done...');
  });
}
