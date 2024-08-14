const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require("dotenv").config();
const port = process.env.PORT || 3002;
const app = express();
const jwt = require('jsonwebtoken');
// Middleware
app.use(cors());
app.use(express.json());


//mongdb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.0wvo3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database = client.db("RestaurantDB");
    const users = database.collection("users");
    const menu = database.collection("menu");
    const reviews = database.collection("reviews");
    const carts = database.collection("carts")

    // middle ware for verifying jwt token----------

    const verifyToken=(req,res,next)=>{
      console.log('amr verfity token  ', req.headers);
      
      if(!req.headers){
       return res.status(401).send({message:'unauthorized'})
      }
       const token = req?.headers?.authorization?.split(' ')[1];
        jwt.verify(token,process.env.SECRET_ACCESS_TOKEN, function ( err, decoded) {
          if(err){
            return res.status(401).send({message:'unauthorized'})
          }
          console.log('decoded value ', decoded);
         req.decoded = decoded;
         next();
        
        });
      }
      // middle wire for verfying admin -----------
      const verifyAdmin = async(req,res,next)=>{
        const email = req.decoded.data.email
        const query = {email:email}
        const user = await users.findOne(query);
        const isAdmin = user?.role === 'admin' ? true : false
        if(!isAdmin){
          return res.status(403).send({message:'forbidden access'})
        }
        next();
      }
    // -------------jwt token ---------------
    app.post('/jwt',async(req,res)=>{
      const user = req.body
      const token = jwt.sign({
        data: user
      },process.env.SECRET_ACCESS_TOKEN, { expiresIn: '1h' });
      console.log(token);
      
      res.send({token:token})
      
    })
    //  admin or not 
    app.get('/users/admin/:email',verifyToken,async(req,res)=>{
      const email = req.params.email 
      if(email !== req.decoded.data.email){
        return res.status(403).send({message:'forbidden access'})
      }
      const query = {email:email}
      const user = await users.findOne(query)
      let isAdmin = false
      if(user){
        isAdmin = user.role === 'admin' ? true : false
      }
      res.send({isAdmin})
    })
   

  // ------------------users---------------

    app.post('/users',async(req,res)=>{
        const userInfo = req.body;    
        const query = {email : userInfo.email}
        const existingUser = await users.findOne(query);
        if(existingUser){
          return res.send({ message: 'user already exists', insertedId: null })
        }
        const newUser = await users.insertOne(userInfo);
        res.send(newUser)
        
    })
    app.get('/users',verifyToken,verifyAdmin, async (req,res)=>{
      // console.log('token calue ', req.headers.authorization);
      
      const allUsers = await users.find().toArray();
      res.send(allUsers);
    })
    app.delete('/user/:id', async(req,res)=>{
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await users.deleteOne(query)
    
      res.send(result)
    })
     app.patch('/user/admin/:id',async (req,res)=>{
     const id = req.params.id
     const filter = {_id: new ObjectId(id)}
     const updateDoc = {
      $set: {
       role:"admin"
      },
    };
    const result = await users.updateOne(filter,updateDoc)
    res.send(result)
    })
    // -----------------menu----------------
    app.get("/menu",async(req,res)=>{
      const allMenu = await menu.find().toArray();
      res.send(allMenu);
  })
  app.post('/menu',verifyToken,verifyAdmin,async(req,res)=>{
    const menuItem = req.body;
    const result = await menu.insertOne(menuItem);
    res.send(result)
  })
  app.delete('/menu/:id', verifyToken, verifyAdmin, async (req, res) => {
    const id = req.params.id;
    const query = { _id: id }
    const result = await menu.deleteOne(query);
    res.send(result);
  })
  app.get('/menu/:id',async(req,res)=>{
    const id = req.params.id
    const query = {_id:id}
    const menuItem = await menu.findOne(query);
    res.send(menuItem)
  })
  app.patch('/menu/:id',verifyToken,verifyAdmin,async(req,res)=>{
    const item = req.body
    const id = req.params.id ;
    const filter = {_id : id}
    const updateDoc = {
      $set :{
       name: item.name,
       price:item.price,
       category:item.category,
       recipe:item.recipe
     }
    }
    const result = await menu.updateOne(filter,updateDoc);
    res.send(result)

  })
    // ---------cart -------------
    app.post('/carts',async(req,res)=>{
      const cartInfo = req.body;
      const newCart = await carts.insertOne(cartInfo);
      res.send(newCart)
      
  })
    app.get('/carts',async(req,res)=>{
     
        const email = req.query.email
        const query = {email : email}
        const allCarts = await carts.find(query).toArray();
        res.send(allCarts)
       
    })
    app.delete('/cart/:id', async(req,res)=>{
        const id = req.params.id
        const query = {_id: new ObjectId(id)}
        const result = await carts.deleteOne(query)
      
        res.send(result)
   })
  //  -----------------reviews----------------
  app.get('/reviews',async(req,res)=>{
    const allReviews = await reviews.find().toArray();
    res.send(allReviews)
})

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  // Server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  

//   DB_USER= restaurantUser
// DB_PASSWORD=BCO0u4oLwopYQU5i