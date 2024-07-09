## learn npm init
1. npm init 
    1.  npm is big package store
2. npm i express 
3. make server.js
4. nodemon npm 
    0. npm i nodemon 
    1. to track changes in file 
    2. ab hame bar bar node server.js nahi likhna padega 
    3. sirf ek bar nodemon server.js likho


##  package.json vs package-lock.json
1. package.json: Defines the project's metadata and dependencies with version ranges.
2. package-lock.json: Locks down the entire dependency tree to specific versions for reproducibility.

## callBack function 

## core modules of Nodejs
1. there are many built in modules in nodejs that we can use
    1. https://nodejs.org/docs/latest/api/
2. for now we are learning about fs and os module 

## 1. fs mudule
it creates a file and write the message inside

### `fs` Module (File System)

The `fs` module helps you work with files and folders on your computer.

#### Common Things You Can Do:

1. **Read Files:**
   - `fs.readFile(path, callback)`: Reads a file.
   - `fs.readFileSync(path)`: Reads a file (waits until done).

2. **Write Files:**
   - `fs.writeFile(path, data, callback)`: Writes to a file.
   - `fs.writeFileSync(path, data)`: Writes to a file (waits until done).

3. **Add to Files:**
   - `fs.appendFile(path, data, callback)`: Adds data to a file.
   - `fs.appendFileSync(path, data)`: Adds data to a file (waits until done).

4. **Delete Files:**
   - `fs.unlink(path, callback)`: Deletes a file.
   - `fs.unlinkSync(path)`: Deletes a file (waits until done).

5. **Work with Folders:**
   - `fs.readdir(path, callback)`: Lists folder contents.
   - `fs.readdirSync(path)`: Lists folder contents (waits until done).
   - `fs.mkdir(path, callback)`: Creates a new folder.
   - `fs.mkdirSync(path)`: Creates a new folder (waits until done).

6. **File Info:**
   - `fs.stat(path, callback)`: Gets file info.
   - `fs.statSync(path)`: Gets file info (waits until done).

#### Example:

```javascript
const fs = require('fs');

// Read a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write to a file
fs.writeFileSync('example.txt', 'Hello, world!', 'utf8');
```

## 2. `os` Module (Operating System)

The `os` module gives you info about the computer's operating system.

#### Common Things You Can Do:

1. **System Info:**
   - `os.arch()`: Get CPU type.
   - `os.platform()`: Get OS platform (like 'win32', 'linux').
   - `os.type()`: Get OS name.
   - `os.release()`: Get OS version.

2. **User Info:**
   - `os.userInfo()`: Get current user info.

3. **Memory:**
   - `os.totalmem()`: Get total memory.
   - `os.freemem()`: Get free memory.

4. **Uptime:**
   - `os.uptime()`: Get how long the computer has been running.

5. **Network Info:**
   - `os.networkInterfaces()`: Get network details.

#### Example:

```javascript
const os = require('os');

// Get system info
console.log('OS Platform:', os.platform());
console.log('OS Type:', os.type());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());

// Get user info
console.log('User Info:', os.userInfo());
```
## code of the day 

```js
// server.js

var fs =require ("fs")

var os =require ("os")

// to know the user info
var user = os.userInfo();
console.log(user.username)

// to make fs file
// fs.appendfile("path","msg",callbackfunction);
fs.appendFile("greeting.txt","Hi"+user.username + '!\n' ,()=>(console.log('file is created')));

// importing files
// creates file notes.js
const notes=require("./notes.js")

// exporting data from notes page
var Myage=notes.age
console.log(Myage)

const letsAdd =notes.AddNumber(5,7)
console.log(letsAdd)
// ==============================================================


// lodash library
// make devlopement easy
// help in dealing with data
// 
var _ = require('lodash');

// example 1

var data=["person","person",1,2,1,2,3,"name","age","2"]
//takeout the unique charecheter
// google lodash docc
var filter =_.uniq(data)
// uniq is available in lodash

console.log(filter)
// [ 'person', 1, 2, 3, 'name', 'age', '2' ]

// Example 2

console.log(_.isString("deva"))

```

## notes.js

```js

// notes.js

console.log("notes page is loaded")

// to export data
var age=24

const AddNumber=function(a,b){
    return a+b
}
module.exports ={
    age,
    AddNumber,
}


```