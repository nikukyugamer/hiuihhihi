const path = require('path')
const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
const serviceAccount = require(path.resolve(
  __dirname,
  '../../config/serviceAccountKey.json'
))

initializeApp({
  credential: cert(serviceAccount),
})
;(async () => {
  const db = getFirestore()
  const snapshot = await db.collection('users').get()
  snapshot.forEach((doc: any) => {
    console.log(doc.id, '=>', doc.data())
  })
})()
