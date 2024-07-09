# git and github ,Hostong server in node js

## git and git hub
1. git is like a time machine of a code 
2. Git is like a time machine for your code.
3. It is a tool that keeps a record of every version of your code, so you can always go back to a previous state if something goes wrong.
4. Install Git: If you haven't already, download and install Git on your computer. You can get it from the official Git website:
    1. https://qit-scm.com/downloads
5. If you want to work with git in your project **Run :git init** inside the root folder of your project
6. This command tells Git to start tracking changes in your project folder.

## git status
    to see status of of your file

## git add.
1. save all(each and every) files in root folder 

## git add filename
1. save only one file

## gitignore
1. to ignore file to be added in git
3. create .gitignore and add like following to ignore file
2. ```js
    // to ignore node_modules directory
    node_modules/
    ```
4. then git add .gitignore

## to delete folder after git add .
1. git rm -r --cached node_modules 

## to enter who you are 
1. git config --global user.email "devendragour907@gmail.com"
2. git config --global user.name "Devendra Gour"

## to save snapshot of a code
1. git commit -m "five meaning full msg here "

## to save changes 
    1. git status 
    2. git add . or git add filename 
    3. git commit -m "enter msg for anathor version 2"

## collabarate and backups, and GITHUB
1. you want to collaborate with others or back up your code online you can create a remote repository on platforms like GitHub
2. Link Your Local and Remote Repositories
If you created a remote repository, you can link it to your local one
3. to create remote repo @ git hub
    go to your git hub account and create repo

4. to connect local with remote 
    1. git remote add origin https://github.com/yourusername/hotels.git
    2. my git username DEVA8459
    3. my repo is hello-world-nodejs
    4. so 
        1. git remote add origin https://github.com/DEVA8459/hello-world-nodejs.git
        2. git branch -M main 
        3. git push -u origin main    
            1. git push -u name of branch

## git push 
1. to publish changes in repo
2. use after git add . and git commit -m

## git pull 
2. soppose if two person working on same project and if person 1 make changes and push to repo 
3. then person 2 will use git pull to fetch all udate of remote repo to local repo
1. to fetch changes of remote repo in local repo

## host mongodb database
1. Now we are running locally MongoDB database.
2. All data operation is performed in a local database, so let's host our database server and make our DB online presence
3. MongoDB Atlas provides a Free cluster for users where you can host your database for free.
4. MongoDB Atlas offers a cloud-hased platform for hosting MongoDB databases
5. The free tier allows developers to explore and experiment with the database without incurring any costs.
6. https://www.mongodb.com/atlas/database

## steps
1.  create account
2. ![alt text](image-6.png)
3. ![alt text](image-7.png)
4. ![alt text](image-8.png)
5. click on connection and choose mongodb for vs codde
5. ![alt text](image-9.png)
    1. make password easy dont add '@'
6. copy that comand and paste in db.js and comented the local one
    ```js
    // for atlas 

        const mongoURL='mongodb+srv://devendragour907:deva88061@cluster0.z4l9wxm.mongodb.net/'
    ```
7. see data in browse collection
8. but now problem arises for puhsing this changes in our remote repo because above link has have our username  an dpassword of atlas
9. so here we use Dotenv

## Dotenv
1. The dotenv module in Node.js is used to manage configuration variables and sensitive information in your applications.
2. It's particularly useful for keeping sensitive data like API keys, database
connection strings, and other environment-specific configurations separate from your code. I
3. npm install dotenv
4. Create a  file name .env File
5. This is where you'll store your environment-specific configuration variables.
6. format VAR_NAME=value
7. ```
    <!--  inside .env -->
    PORT=3000
    MONGODB_URL=mongodb+srv://devendragour907:deva88061@cluster0.z4l9wxm.mongodb.net/
    ```
8. file changes 
```js 
// in server.js
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// remove 3000 from get wali methode and put PORT

// in db.js
/ for env
require("dotenv").config();

const DB_URL = process.env.MONGODB_URL;

const mongoURL = DB_URL;


```
