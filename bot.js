var twit = require('twit');
var config = require('./config.js');
// Pass the consumer and access tokens from Twitter application to twit
var Twitter = new twit(config);

// Retweet Bot
// Write a function expression that finds the latest tweets according to the query passed as a parameter.

var retweet = function(){
  // initialize a params object that will contain the query property
  var params = {
    // 'q' is the property for query and the values listed here could be a twitter handler, twitter account or a hashtag
    q: '#nodejs, #Nodejs',
    // the following properties are optional
    result_type: 'recent',
    lang: 'en'
  }

   // for more parametes, see: https://dev.twitter.com/rest/reference/get/search/tweets
}

// Search for tweets based on the parameters defined above in retweet. Use the Twitter.get function to get any of the REST API endpoints.
Twitter.get('search/tweets', params, function(err, data) {
  // if there are no errors
  if (!err) {
    // Grab ID of tweet to retweet
    var retweetId = data.statuses[0].id_str;
    // Tell Twitter to retweet
    Twitter.post('stauses/retweet/:id', {
      id: retweetId
    }, function(err, response) {
      if (response) {
        console.log("retweeted!!!");
      }
      // If there was an error while tweeting
      if (err) {
        console.log('Something went wrong while retweeting...');
      }
    });
  }
  else {
    console.log("Something went wrong while SEARCHING...");
  }
});
}

// grab and retweet as soon as program is running...
retweet();
// retweet every 50 minutes...
  setInterval(retweet, 3000000);
