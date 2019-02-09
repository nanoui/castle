/*
    Tutorial : https://codeburst.io/an-introduction-to-web-scraping-with-node-js-1045b55c63f7
    Purpose : Getting the names and birthdays of US Presidents from Wikipedia
 */

const request = require('request');
const cheerio = require('cheerio');

request('https://www.relaischateaux.com/us/destinations/europe/france', (error, response, html) => {
  if (!error && response.statusCode == 200) {

    /* get the entire html of the page */
    const $ = cheerio.load(html);

    /* get and return in the console the tag SCRIPT from the classe overmapWrap */
    const destinations = $('.overmapWrap').find('script');
    console.log(destinations.html());
  }
});
