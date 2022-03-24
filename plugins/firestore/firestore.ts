const path = require('path')
const {
  initializeApp,
  applicationDefault,
  cert,
} = require('firebase-admin/app')
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require('firebase-admin/firestore')
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
