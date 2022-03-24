# Introduction

#### WHAT IS GIT
  >Git is Distributed Version Control System

#### WHAT IS GitHub
  >GitHub is a Hosting Service,   
  >Which host GIT repositories  

### Use of GIT

  + Easily Recover Files
  + To identify who make issues and when make issues
  + Rollback to previously working state

### GIT Features
  1. Capture Snapshot / Not Difference  
  1. Almost every operation is local  
  1. Git has Integrity (means file is secured)
  1. Git generally only ADDS data

---

## Installing GIT
  after installing check installation status using below commands

    git

>after git installation we got 
  >> Command Line Tool
  >> Git Bash (Terminal)   

## To configure a GIT  
    git config --global user.name "Jigs Ptel"  

    git config --global user.email "jigs779@gmail.com" 

### To check config
    git config --list   

    git config user.name

## git - three stage architecture

commit === snapshot (freeze/save the current working version of software)

>### Local Operation
>> 1. Working Directory = files, which are available in Present Working Directory
>> 1. Staging Area = wo files jo agle commit me jaye  
(set of files, which you want to sent them on next commit)  
>> 1. git directory (repository) = (.git folder) files, which are commmited

## make files => stage files => make commit

---

### To check repository or not?

    git status

### To make git repository

    git init

### To stage all files

    git add --a

### To commit stages files

    git commit -m "Message/Changes/Version Name"

### To check all logs of commits

    git log

### To stage selected files

    git add index.html

### To delete git repository

    rm -rf .git


### To download repository from github

    git clone "url----" "folder name"

### File Status Lifecycle

>untracked > unmodified > modified > staged

## .gitignore (use to ignore the files and folders in repository)
### To make .gitignore file  
touch .gitignore  
>add file name like "error.log" in ".gitignore" file to ignore file   
or   
add "*.txt" in ".gitignore" to ignore all txt files   
or  
>add folder name like "img/" in ".gitignore" file to ignore folder

### To check the difference between staging area & working directory
    git diff

### To check difference between staging area vs last commit
    git diff --staged

### To skiping staging area while commit
    git commit -a -m "change details"

### To remove file from repository
    git rm new.txt

### To remove file in repository
    git mv one.txt new.txt

### To untrack file in repository (which also added in .gitignore)

    git rm --cached new.txt

### To view git log with difference

    git log -p

### To brief view of log with difference
    git log --stat

### To view log in one line 
    git log --pretty=oneline

### To view log in short brief 

    git log --pretty=short

### To view log in full brief 

    git log --pretty=full
    
### To view log as per timestamp    
    git log --since=2.days
    git log --since=2.weeks
    git log --since=2.months
    git log --since=2.years

### To changed the commit
    git commit --amend

### To check repository 
    git remote

### To check repository PULL PUSH request
    git remote -v


### To Push an existing repository
    git remote add origin https://github.com/jigs779/newGit.git

## To generae the SSH Key

    ssh-keygen -t ed25519 -C "your_email@example.com"

### To start the SSH client
    eval "$(ssh-agent -s)"

### Add SSH private key to the ssh-agent
    ssh-add ~/.ssh/id_ed25519

### To copy SSH key to clipboard
     clip < ~/.ssh/id_ed25519.pub   

### Commit After addingthe SSH key
    git commit -m "initial commit
    git push origin master

### TO PUSH repository on github

    git push -u origin master

### Setting Alias

> to set git status as git.st   
 
    git config --global alias.st status

### To restore (unstage) staged file
    git restore --staged "file name"

### To create a branch
    git checkout -b "branchname"

### To switch to master
    git checkout master

### To check all branches
    git branch

### To merge branch on master
    git merge "branchname"

### To restore file (to previous commit)
    git checout -- "filename"

### To restore all file (to previous commit)
    git checout -f

# Branch Management

> to view all branches   

    git branch 

> to view all branches with commit hash & message  

    git branch -v

> to view already merged branches   

    git branch --merged

> to view not merged branches   

    git branch --no-merged

> to delete the branch (if merged)   

    git branch -d "branchname"

> to delete the branch (if not merged)   

    git branch -D "branchname"

## Branching Worflow
  1. Long Running Branch  
    - master  
    - develop  
    - proposed update
  1. Topic Branch (short leaf branch)

## To push branch on remote
    git push origin "branchname"

## To remove branch from remote
    git push -d origin "branchname"
