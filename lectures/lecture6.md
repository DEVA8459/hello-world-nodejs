 <!-- use draw .io for planning of API -->
<!-- https://drive.gooale.com/file/d/1TswAyCgfsa04Hp6f40P-Umg GVkdW4eQ/view?
usp=sharinq -->
 # DELETE AND UPDATE 

## Parametarise Api call
1. now if someone give you list of people who are only waiters 
2. then we can create end point like this
    1. /person/chef
    2. /person/waiter
    3. /person/manager

3. but this is not the correct methode to create as many functions here we can marametarise end point
4. i can be dynamically inderted into url whn making the request to the api
2. by doing this we dont have to create every time but it automatically get fetch for requr=estred keyword
5. way to make it 
    1. app.get('/person/:worktype')
        ```js
        //server.js

        app.get("/person/:worktype", async (req, res) => {
        try {
            const workType = req.params.worktype;
            if (workType == "chef" || workType == "manager" || workType == "waiter") {
            const response = await Person.find({ work: workType });
            console.log("response.fetch");
            res.status(200).json(response);
            } else {
            res.status(404).json({ error: "INvalid work Type" });
            }
        } catch {
            console.log(err);
            res.status(500).json({ error: "internal server Error" });
        }
        });

        ```

## Express router
1. We have a lots of Endpoints in a single file server.js
2. This makes Ead experience in code readability as well as code handling
3. Express Router is a way to modularize and organize your route handling
code in an Express.js application.
4. So let's create a separate file to manage endpoints person and Imenu
Express Router is like a traffic cop for your web server
5. Express Router helps you organize and manage these pages or endpoints in your web application. It's like creating separate folders for different types of tasks.
6. Create a folder routes then personRoutes.js
```js
const express =require('express')
const router = express.Router()

//paste your get post etc code here 
//but here we are going to replace app with route
const Person = require('../models/Person');

router.post("/", async (req, res) => {
    try {
      const data = req.body; //assuming the request body contains the person data
  
      //create a new person doccument using a mongoose model
  
      const newPerson = new Person(data);
  
      // save the new person to database
      const response = await newPerson.save();
      console.log("data saved");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });
  
  router.get("/", async (req, res) => {
    try {
      const data = await Person.find();
      console.log("deta fetch");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });
  
  router.get("/:worktype", async (req, res) => {
    try {
      const workType = req.params.worktype;
      if (workType == "chef" || workType == "manager" || workType == "waiter" ||workType == "Chef") {
        const response = await Person.find({ work: workType });
        console.log("response.fetch");
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: "INvalid work Type" });
      }
    }catch(err) {
      console.log(err);
      res.status(500).json({ error: "internal server Error" });
    }
  });

module.exports = router

```
7. //server.js
```js
const express = require("express");
const app = express();
// importing db
const db = require("./db");

// body parser

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body


app.get("/", function (req, res) {
  res.send("hey deva its your server ");
});

const personRoutes=require("./Routes/personRoutes")

//importing Router file

app.use('/person',personRoutes) 

app.get("/chicken", (req, res) => {
  res.send("sure we have chicken");
});
app.get("/Idli", (req, res) => {
  var costomise_Idli = {
    name: "rava idli",
    size: "10 inch",
    is_sambar: "true",
    is_chutney: "flase",
  };
  res.send(costomise_Idli);
});



app.listen(3000, () => {
  console.log("server zindaa hai");
});
// 3000 is a port


```
## homework dothis all for menu

## update 
1. We will update our person Record, for that we will create an endpoint from where we are able to update record
2. For Updation we need two things
    1. Which record we want to update ?
    2. What exactly we want to update ?
3. For update we **will use PUT method** as well as **patch** to create a endpoint
4. What is a uniaue identifier in a document in a collection ?
    1. It's _ id which is given by mongodb itself, we will use this to find the particular record which we want to update
5. —> And now we will send the data as same like we did in POST method.
```js

  router.put ('/:id', async(req,res)=>{
    try{
        const personId =req.params.id; //Extract the id from url parameter
        const updatedPersonData=req.body //update data for the person

        const response =await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,//Return the updated docc
            runValidators:true ,//run mangoose validation
        })
        if (!response){
            return res.status(404).json({error:'person not found'})
        }
        console.log('data updated')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: "internal server Error" });
    }
  })

  ```

  ## delete
  ```js
  router.delete ('/:id', async(req,res)=>{
    try{
        const personId =req.params.id; //Extract the id from url parameter
       

        const response =await Person.findByIdAndDelete(personId)

        if (!response){
            return res.status(404).json({error:'person not found'})
        }
        console.log('data deleted')
        res.status(200).json({messege:'person deleted'})
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: "internal server Error" });
    }
  })

  ```