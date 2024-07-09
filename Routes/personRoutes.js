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


module.exports = router