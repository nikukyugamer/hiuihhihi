const { twitterClient } = require('../lib/twitterClient')
const OperateFirestoreClass = require('../plugins/firestore/firestore')

const getUserObject = async (screenName: string) => {
  const userObject = await twitterClient.v1.user({ screen_name: screenName })
  console.log(userObject)
}

// const v2Client = new TwitterApi(process.env.BEARER_TOKEN);
// const v2Client = await userClient.appLogin();
// NOTE: v2のメリットが今のところ見えないので、v1を使う
const getTweetObject = async (tweetId: string, apiVersion = 'v1') => {
  if (apiVersion !== 'v1') return

  const tweet = await twitterClient.v1.singleTweet(tweetId)

  console.log(tweet)
}

const getListObject = async (listParams: object) => {
  const listObject = await twitterClient.v1.list(listParams)

  console.log(listObject)
}

const listTimeline = async (ListStatusesV1Params: object) => {
  const listTimeline = await twitterClient.v1.listStatuses(ListStatusesV1Params)
  const tweet = listTimeline.tweets[0]

  console.log(`@${tweet.user.screen_name}`)
  console.log(tweet.full_text)
}

getUserObject('KONAMI573ch') // => https://twitter.com/KONAMI573ch
getTweetObject('1507160400655122471', 'v1') // => https://twitter.com/nyalan_jalan/status/1507160400655122471
getListObject({ list_id: process.env.LIST_ID_FCGAMEM2_20220224 })

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/create-manage-lists/api-reference/get-lists-statuses
// count のデフォルトは 20
listTimeline({ list_id: process.env.LIST_ID_FCGAMEM2_20220224 })

const firestore = new OperateFirestoreClass()
firestore.getFirestore()
