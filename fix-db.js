const fs = require('fs');
const mongoose = require('mongoose');

async function fixDB() {
  try {
    const env = fs.readFileSync('.env', 'utf8');
    const mongoUri = env.split('\n').find(line => line.startsWith('MONGODB_URI=')).split('=')[1].trim().replace(/['"]/g, '');
    
    await mongoose.connect(mongoUri);
    const db = mongoose.connection.db;
    
    const docs = await db.collection('sitecontents').find({}).toArray();
    for (let doc of docs) {
      let docString = JSON.stringify(doc);
      if (docString.includes('PM.jpeg')) {
        docString = docString.replace(/"PM\.jpeg"/g, '"/logo.png"');
        const newDoc = JSON.parse(docString);
        await db.collection('sitecontents').replaceOne({ _id: doc._id }, newDoc);
        console.log(`Updated document: ${doc.pageId} / ${doc.sectionId}`);
      }
    }
    console.log('Done');
  } catch (err) {
    console.error(err);
  } finally {
    process.exit(0);
  }
}

fixDB();
