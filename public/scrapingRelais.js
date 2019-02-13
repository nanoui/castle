
const request = require('request');
const cheerio = require('cheerio');

// write the results in a csv file
const fs = require('fs');
const writeStream = fs.createWriteStream('relais.csv');
// headers in the csv
writeStream.write(`Hotel name, Restaurant name \n`);


/*
   scrap the sitemap in "List of Relais & Chateaux's properties" = the etablissements
   In this list of etablissement, we are interested in the division "France", listing the french hotels and restaurants
*/

request('https://www.relaischateaux.com/us/site-map/etablissements', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    //console.log(html);

    var $ = cheerio.load(html);

    // all the li in the ul = list of etablissements in France
    const list = $('#countryF').next().first().children().next();
    //console.log(list.html());

    // to get only the name and link
    list.children().each((i, el) => {
      const hotelName = $(el)
        .find('a')
        .first()
        .text()
        .replace(/\s\s+/g, ''); //to delete the blank space that are useless

      const hotelLink = $(el)
        .find('a')
        .first()
        .attr('href');

      // go on the link to scrape the name of the restaurant attached
      request(hotelLink, (error, response, html) => {
          if (!error && response.statusCode == 200) {

            var c = cheerio.load(html);

            if (c('.jsSecondNavSub').length > 0) {

              if(c('.jsSecondNavMain').children().next().find('a').first().find('span').text() === "Restaurant") {
                const otherRestaurantLink = c('.jsSecondNavSub')

                otherRestaurantLink.children().each((i, el) => {
                  const restaurantName = c(el)
                    .find('a')
                    .text()
                    .replace(/\s\s+/g, '');

                  if (restaurantName === "Other restaurants") {
                    const otherRestaurant = c(el)
                      .find('a')
                      .first()
                      .attr('href');

                    request(otherRestaurant, (error, response, html) => {
                      if (!error && response.statusCode == 200) {
                        var b = cheerio.load(html);

                        const div = b('.hotelTabsHeader');

                        div.children().each((i, el) => {
                          const otherRestaurantName = b(el)
                            .find('.mainTitle2.noVerticalMargin.other-restaurant-title')
                            .text()
                            .replace(/\s\s+/g, '');

                          if (otherRestaurantName != "") {
                            //console.log(hotelName, otherRestaurantName);

                            //write row to csv
                            writeStream.write(`${hotelName}, ${otherRestaurantName} \n`);
                          }
                        });
                      }
                    })
                  }

                  else {
                    //console.log(hotelName, restaurantName);

                    //write row to csv
                    writeStream.write(`${hotelName}, ${restaurantName} \n`);
                  }

                  //console.log(hotelName, restaurantName);
                });
              }
            }

            else {
              const restaurantLink = c('.jsSecondNavMain').children().next().find('a');

              if (restaurantLink.first().find('span').text() === "Restaurant") {
                const l = restaurantLink.first().attr('href');


                request(l, (error, response, html) => {
                  if(!error && response.statusCode == 200) {

                    var a = cheerio.load(html);

                    const restaurantName = a('.hotelTabsHeaderTitle').find('h3').text().replace(/\s\s+/g, '');
                    //console.log(hotelName, restaurantName);

                    //write row to csv
                    writeStream.write(`${hotelName}, ${restaurantName} \n`);
                  }
                })
              }
            }
          }
      })

      //console.log(hotelName, hotelLink);
    });

    console.log('Scraping done...');
  }
});
