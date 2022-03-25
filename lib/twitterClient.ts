require('dotenv').config()
const { TwitterApi } = require('twitter-api-v2')

const sampleTwitterApp = async function () {
  const userClient = new TwitterApi({
    appKey: process.env.CONSUMER_APP_KEY,
    appSecret: process.env.CONSUMER_APP_SECRET,
    accessToken: process.env.ACCESS_OAUTH_TOKEN,
    accessSecret: process.env.ACCESS_OAUTH_TOKEN_SECRET,
  })

  // const appOnlyClient = new TwitterApi(process.env.BEARER_TOKEN);
  // const appOnlyClientFromConsumer = await userClient.appLogin();

  const me = await userClient.v1.user({ screen_name: 'KONAMI573ch' })
  console.log(me)
}

sampleTwitterApp()

// {
//   id: 150552419,
//   id_str: '150552419',
//   name: 'KONAMI コナミ公式',
//   screen_name: 'KONAMI573ch',
//   location: '東京都中央区銀座',
//   profile_location: null,
//   description: 'コナミデジタルエンタテインメントの公式アカウントです。\n' +
//     'KONAMIの商品・サービス情報を宣伝チームのコナちゃんがお届けします！\n' +
