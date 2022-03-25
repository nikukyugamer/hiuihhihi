const { userObject } = require('../__fixtures__/userObject')
const { tweetObjectV1 } = require('../__fixtures__/tweetObjectV1')
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
