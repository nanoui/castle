
const request = require('request');
const cheerio = require('cheerio');

/*
   scrap the sitemap in "List of Relais & Chateaux's properties" = the etablissements
   In this list of etablissement, we are interested in the division "France", listing the french hotels and restaurants
*/

request('https://www.relaischateaux.com/us/site-map/etablissements', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    //console.log(html);

    var $ = cheerio.load(html);

    const countryF = $('#countryF').next();

    console.log(countryF.html());
  }
});
