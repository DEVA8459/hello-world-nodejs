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


