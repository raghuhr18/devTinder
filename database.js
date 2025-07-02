const {MongoClient} = require("mongodb")

const url = "mongodb+srv://namastedev:GwYipgZXwGGJKYEB@namastenode.8fnpvow.mongodb.net/";
const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');
    // the following code examples can be pasted here...
  
    // const data = {
    //     "firstname": "Deepika",
    //     "lastname": "Padukone",
    //     "location": "Mumbai",
    //     "phonenumber": "9876222260",
    // }

    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);


    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);


    const countDocuments = await collection.countDocuments({});
    console.log('Counted documents =>', countDocuments);

    const hereFindResult = await collection.find({ location: "Mumbai" }).toArray();
    console.log('Updated documents =>', hereFindResult);


    return 'done.';
  }


  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());