const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
const serviceAccount = require('../../config/serviceAccountKey.json')

class OperateFirestore {
  constructor() {
    initializeApp({
      credential: cert(serviceAccount),
    })
  }

  async writeTweet(tweet: any) {
    const db = getFirestore()

    console.log(typeof tweet)
    console.log(typeof db)

    // FIXME: ちゃんと書く
    // const data = {
    //   name: 'Los Angeles',
    //   state: 'CA',
    //   country: 'USA',
    // }

    // Add a new document in collection "cities" with ID 'LA'
    // const res1 = await db.collection('users').doc('LA').set(data)
    // const res2 = await db.collection('tweets').doc('LA').set(data)
  }

  async getFirestore() {
    const db = getFirestore()
    const snapshot = await db.collection('users').get()
    snapshot.forEach((doc: any) => {
      console.log(doc.id, '=>', doc.data())
    })
  }
}

module.exports = OperateFirestore
