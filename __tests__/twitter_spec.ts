const { userObject } = require('../__fixtures__/userObject')
const { tweetObjectV1 } = require('../__fixtures__/tweetObjectV1')
const {
  tweetObjectWithRetweetV1,
} = require('../__fixtures__/tweetObjectWithRetweetV1')
const { listObject } = require('../__fixtures__/listObject')

test('userObject が期待通りの値であること', () => {
  expect(userObject.screen_name).toBe('KONAMI573ch')
})

test('tweetObjectV1 が期待通りの値であること', () => {
  expect(tweetObjectV1.full_text).toBe(
    '春なにょだ🌸\n\n#にゃらん #じゃらん https://t.co/tw18Fa3FbI'
  )
})

test('listObject が期待通りの値であること', () => {
  expect(listObject.uri).toBe('/SCREEN_NAME/lists/12345')
})

describe('retweeted_status プロパティ', () => {
  test('リツイート ではない場合は retweeted_status というプロパティが存在しないこと', () => {
    expect(tweetObjectV1.retweeted_status).toBeUndefined()
  })

  test('リツイート の場合は retweeted_status というプロパティが存在すること', () => {
    expect(tweetObjectWithRetweetV1.retweeted_status).toBeTruthy()
  })
})
