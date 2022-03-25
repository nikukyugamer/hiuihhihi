require('dotenv').config()
const { TwitterApi } = require('twitter-api-v2')

module.exports.twitterClient = new TwitterApi({
  appKey: process.env.CONSUMER_APP_KEY,
  appSecret: process.env.CONSUMER_APP_SECRET,
  accessToken: process.env.ACCESS_OAUTH_TOKEN,
  accessSecret: process.env.ACCESS_OAUTH_TOKEN_SECRET,
})
