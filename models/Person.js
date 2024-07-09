const mongoose = require('mongoose')

// define the persons schema

const personSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true
        },
        age:{
            type:Number
        },
        work:{
            type:String,
            enum:["Chef","waiter","manager"],
            required:true
        },
        email:{
            type: String,
            required:true,
            unique:true
        },
        address:{
            type:String,
            required: true

        },
        salary :{
            type:String,
            required:true
        }

    }
)

// create a person model 

const Person =mongoose.model('person',personSchema);

module.exports=Person