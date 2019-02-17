
const request = require('request');
const cheerio = require('cheerio');

// write the results in a csv file
const fs = require('fs');
const writeStream1 = fs.createWriteStream('relaisInfo.csv');
const writeStream2 = fs.createWriteStream('relaisChef.csv');
// headers in the csv
writeStream1.write(`Hotel~ Departement~ Number Of Rooms~ Price~ Lien \n`);
writeStream2.write(`Hotel~ Zipcode~ Chef \n`);


/*
   scrap the sitemap in "List of Relais & Chateaux's properties" = the etablissements
   In this list of etablissement, we are interested in the division "France", listing the french hotels and restaurants
*/

request('https://www.relaischateaux.com/us/site-map/etablissements', (error, response, html) => {
  if (!error && response.statusCode == 200) {

    var $ = cheerio.load(html);

    // all the li in the ul = list of etablissements in France
    const list = $('#countryF').next().first().children().next(); // accèder 'ul'
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


      // go on the hotelLink to scrape informations about the hotel (name, description, price, etc.)
      request(hotelLink, (error, response, html) => {
        if (!error && response.statusCode == 200) {

          var c = cheerio.load(html);

          if(c('.jsSecondNavMain').children().next().find('a').first().find('span').text() === "Restaurant") {
            const hotelDepartement = c('.titleExtraInfo').text().replace(/\s\s+/g, '');
            //const hotelDescription = c('.richTextMargin').text().replace(/\s\s+/g, '');
            const hotelRoom = c('.capacity').text().replace(/\s\s+/g, '');
            const hotelPrice = c('.innerHotelHeader').children().next().children().find('.price').text().replace(/\s\s+/g, '');

            //console.log(hotelName, hotelDepartement, hotelDescription, hotelRoom, hotelPrice);
            writeStream1.write(`${hotelName}~ ${hotelDepartement}~ ${hotelRoom}~ ${hotelPrice}~ ${hotelLink} \n`);
          }
        }
      })


      // take only the chef, not the maitre d'hôtel
      if ($(el).find('a').next().first().length > 0 && $(el).find('a').next().next().first().length > 0) {
        const chefLink = $(el)
          .find('a')
          .next()
          .first()
          .attr('href');
        ;

        // go on the chefLink to scrape informations about the chef (name, zipcode)
        request(chefLink, (error, response, html) => {
          if (!error && response.statusCode == 200) {

            var b = cheerio.load(html);

            const chefName = b('.col-1-1.bottomMargin').find('h1').text().replace(/\s\s+/g, '');
            const zipcode = b('span[itemprop="postalCode"]').first().text().replace(/\s\s+/g, '');

            //console.log(hotelName, chefName, zipcode);
            writeStream2.write(`${hotelName}~ ${zipcode}~ ${chefName} \n`);
          }
        })
      }



      // request(hotelLink, (error, response, html) => {
      //     if (!error && response.statusCode == 200) {
      //
      //       var c = cheerio.load(html);
      //
      //       if (c('.jsSecondNavSub').length > 0) {
      //
      //         if(c('.jsSecondNavMain').children().next().find('a').first().find('span').text() === "Restaurant") {
      //
      //           const hotelDepartement = c('.titleExtraInfo').text().replace(/\s\s+/g, '');
      //           const hotelCitation = c('.citationMsg').text().replace(/\s\s+/g, '');
      //           const hotelDescription = c('.richTextMargin').text().replace(/\s\s+/g, '');
      //           const hotelNombreChambre = c('.capacity').text().replace(/\s\s+/g, '');
      //           const hotelPrix = c('.innerHotelHeader').children().next().children().find('.price').text().replace(/\s\s+/g, '');
      //
      //
      //           const otherRestaurantLink = c('.jsSecondNavSub')
      //
      //           otherRestaurantLink.children().each((i, el) => {
      //             const restaurantName = c(el)
      //               .find('a')
      //               .text()
      //               .replace(/\s\s+/g, '');
      //
      //             if (restaurantName === "Other restaurants") {
      //               const otherRestaurant = c(el)
      //                 .find('a')
      //                 .first()
      //                 .attr('href');
      //
      //               request(otherRestaurant, (error, response, html) => {
      //                 if (!error && response.statusCode == 200) {
      //                   var b = cheerio.load(html);
      //
      //                   const div = b('.hotelTabsHeader');
      //
      //                   div.children().each((i, el) => {
      //                     const otherRestaurantName = b(el)
      //                       .find('.mainTitle2.noVerticalMargin.other-restaurant-title')
      //                       .text()
      //                       .replace(/\s\s+/g, '');
      //
      //                     if (otherRestaurantName != "") {
      //                       //console.log(hotelName, otherRestaurantName);
      //                       //console.log(hotelName, hotelDepartement, hotelCitation, hotelDescription, hotelNombreChambre, hotelPrix);
      //                       //write row to csv
      //                       writeStream.write(`${hotelName}~ ${hotelDepartement}~ ${hotelCitation}~ ${hotelDescription}~ ${hotelNombreChambre}~ ${hotelPrix}~ ${otherRestaurantName}~ ${hotelLink} \n`);
      //                     }
      //                   });
      //                 }
      //               })
      //             }
      //
      //             else {
      //               //console.log(hotelName, restaurantName);
      //               //console.log(hotelName, hotelDepartement, hotelCitation, hotelDescription, hotelNombreChambre, hotelPrix);
      //               //write row to csv
      //               writeStream.write(`${hotelName}~ ${hotelDepartement}~ ${hotelCitation}~ ${hotelDescription}~ ${hotelNombreChambre}~ ${hotelPrix}~ ${restaurantName}~ ${hotelLink} \n`);
      //             }
      //
      //             //console.log(hotelName, restaurantName);
      //           });
      //         }
      //       }
      //
      //       else {
      //         const restaurantLink = c('.jsSecondNavMain').children().next().find('a');
      //
      //         if (restaurantLink.first().find('span').text() === "Restaurant") {
      //
      //           const hotelDepartement = c('.titleExtraInfo').text().replace(/\s\s+/g, '');
      //           const hotelCitation = c('.citationMsg').text().replace(/\s\s+/g, '');
      //           const hotelDescription = c('.richTextMargin').text().replace(/\s\s+/g, '');
      //           const hotelNombreChambre = c('.capacity').text().replace(/\s\s+/g, '');
      //           const hotelPrix = c('.innerHotelHeader').children().next().children().find('.price').text().replace(/\s\s+/g, '');
      //
      //
      //           const l = restaurantLink.first().attr('href');
      //
      //
      //           request(l, (error, response, html) => {
      //             if(!error && response.statusCode == 200) {
      //
      //               var a = cheerio.load(html);
      //
      //               const restaurantName = a('.hotelTabsHeaderTitle').find('h3').text().replace(/\s\s+/g, '');
      //               //console.log(hotelName, restaurantName);
      //               //console.log(hotelName, hotelDepartement, hotelCitation, hotelDescription, hotelNombreChambre, hotelPrix);
      //               //write row to csv
      //               writeStream.write(`${hotelName}~ ${hotelDepartement}~ ${hotelCitation}~ ${hotelDescription}~ ${hotelNombreChambre}~ ${hotelPrix}~ ${restaurantName}~ ${hotelLink} \n`);
      //             }
      //           })
      //         }
      //       }
      //     }
      // })

    });

    console.log('Scraping done...');

  }
});
