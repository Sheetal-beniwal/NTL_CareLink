const mongoose = require('mongoose');

const uri = "mongodb+srv://alabasta:mongopass1@cluster0.o5affzp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function test(dbName) {
  try {
    const conn = await mongoose.createConnection(`${uri}&dbName=${dbName}`);
    console.log(`🔗 Checking ${dbName}...`);
    
    // Check registrations collection
    const registrations = conn.collection('registrations');
    const count = await registrations.countDocuments();
    console.log(`📝 [${dbName}] Registrations count:`, count);
    
    await conn.close();
  } catch (err) {
    console.error(`❌ Error in ${dbName}:`, err);
  }
}

async function run() {
  await test('ntl_care');
  await test('ntl_carelink');
}

run();
