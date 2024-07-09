# Rest api node js Express 

## 1. server in nodejs
A: 
1. server - Aserver is a person who communicate woth clients
2. Analogy -> server = waiter 
3. Aanlogy -> DataBase = chef
4. A server is a Computer Programm that responsible for preparing and delivering data to other computer
    1. webPages ,images,videos,or any other info
5. WorkStation ==> Internet ==> Server
6. Client (get/post/put/delete)(recived data in json)<===>RestApi <===> DataBase


## 2. Json
1. JSON is a simple way to organize and share information, like a **neat and structured note**. It's easy to read and write for both people and computers.

2. json is **lightweight**
3. in most context js is **represent as string**
4. code
```json
{
  "title": "Harry Potter and the Sorcerer's Stone",
  "author": "J.K. Rowling",
  "year": 1997,
  "genres": ["Fantasy", "Adventure"]
}

```

5. Key Points
    1.  **Curly Braces {}**: Hold objects (like a book).
    2. **Square Brackets []**: Hold lists (like genres).
    3. **Key-Value Pairs**: "key": "value" (like "author": "J.K. Rowling"). 

## 3. conversion of json into object and viceversa
1. **json to Object**
    1. ```js
        const jsonstring='{"name":"john","age":30 ,"city":"NewYork"}'

        const jsonObject = JSON.parse(jsonstring)
        // it converts json into objet 

        console.log(jsonObject.name)//john
         
        ```
    2. shortcut 
        1. parsejob
        2. stringify-ob-jeson
        3. note 
            1. type of json is **strng**

2. **Object to JSON**
    1.  
        ```js

        const ObjectToConvert ={name:"Alice", age:24};

        //converts object to json 

        const JsonStringfied =JSON.stringify(objectToConvert)

        console.log(JsonStringfied)
        //{"name":"Alice", "age":24};

        ```
    2. 

## what are Api and Endpoints
1. Imagine a menu card in a restaurant
Lots of options are there. each option will give you a different order
2. now ,collection of that list = Menu card = API's
3. And an option in that list = Endpoint
4. And the Waiter only understood whatever things are written on the menu
card

## creating a server 
1. Creating a server in NodeJs via express package
2. Express.js is a popular framework for building web applications and APIs
using Node.js
3. When you create an Express.js applicatio. you're setting up the
foundation for handling incoming requests and defining how your application responds to them.
4. Now we are going to create a server == waiter
5. Now the waiter has his own home?
    1. In simple terms, "localhost" refers to your own computer. 
    2. After creating a server in NodeJS, you can access your environment in 'localhost'
6.  Port Number?
    1.  Let's suppose in a building — 100 rooms are there, for someone to reach he must know the room number right?

## making server 
1. npm i express
    ```js
        // paste this in server.js
        const express = require('express')
        const app = express()

        app.get('/', function (req, res) {
        res.send('hey deva its your server ')
        })

        app.listen(3000)
        // 3000 is a port 

    ```

## Methods to share data
1. Now, in the world of web development, we need to deal with data
2. How data is sent and received between a client (like a web browser) and a
server (built with Node.js)
3. So there are lots of methods out there to send or receive data according to their needs.
    1. GET
    2. POST
    3. PATCH
    4. DELETE

## 1. get 
1. Imagine you want to read a book on a library shelf.
2. You don't change anything
3. you just want to get the information.
4. Similarly, the GET method is used to request data from the server.
5. For example, when you enter a website URL in your browser,
6. your browser sends a GET request to the server to fetch the web page.

## code 
```js
//server.js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('hey deva its your server ')
})

app.get ('/chicken' ,(req,res)=>{
    res.send("sure we have chicken")
})
app.get ('/Idli' ,(req,res)=>{
    var costomise_Idli={
        name:"rava idli",
        size:"10 inch",
        is_sambar:"true",
        is_chutney:"flase"
    }
    res.send(costomise_Idli)
})

```