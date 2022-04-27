## Basic FIle System of Linux 

### /bin : Basic programs (ls, cd, mv, etc)

### /sbin : System programs (fdisk, sysctl, mkfs etd)

### /etc : Configuration files

### /temp : Temporary files

### /usr/bin : Applications (apt, nmap, etc)

### /usr/share : Application support & data files

### /home : Personal directories of user's (/home/jigs779)

### /root : Home directory of super use (admin)

<br/>  

---

<br/>  


## Basic Linux Commands  
<br/>  


### List all the foldrrs and files of the directory  

    ls

### Change directory  

    cd

### Print working directory  

    pwd

### to check basic commands and there use  

    help

    ex : dir -help

### to check complete manual of command or program  

    man

    ex : man dir
    
---

## Basic Linux Commands (for files operations)  
<br/>  

Same as ls  

    dir

Create a directory  

    mkdir

Copy a file or folder   

    cp

    ex : cp test.md  desktop/testData

Move a file or folder  

    mv

    ex : mv test.md  desktop/testData

delete a file or folder  

    rm

    ex : rm test.md (to delete a file)

    ex : rm -f testData (to delete a folder)


## Advance Linux Commands  
<br/>

### Grant root privileges  

    sudo su

### Show content of a file  

    cat

    ex : cat index.html

### edit file using command line  

    ex : nano index.html

### Linux File editor  

    ex : gedit index.html

### Change directory/ file permission  

    ex : chmod -w test.md (to remove write permission)

    ex : chmod -r test.md (to add read permission)

    ex : chmod +wx test.md (to add write and execute permission)

    ls -l (to list all files with permisiion details)

<br/>

## Advance Linux Commands  

### Execute shell files  
 
    ./

    ex : ./script.bat

### Execute shell programs  

    ex : bash script.bat


### Update packages list (URL's)  

    apt-get update

### Update all installed programs  

    apt-get upgrade

### Install a particular program   

    apt get install {program-name}

--- 

>### PID : Process ID  
>### PR : Priority  
>### VIRT : Virtual Memory  
>### RES : Reserved Memory  
>### SHR : Shared Memory  
>### S : Program Status  

---
<br/>

## Other Linux Commands  

### Showing running processes  

    top

### Terminate running process  

    ex : kill {PID}

### Who is logged on and what they are doing  

    w

### Display the username of the current user  

    whoami

### Create empty files  

    touch

---
<br/>

>### reboot : to restart the system

<br/>

## For Apache2 Server
    
    service apache2 start
    service apache2 stop
    service apache2 restart

## To install .deb files

    dpkg -i {filename}

## To remove apt error (program not installed)

    cd /etc /apt
    
    gedit sources.list

>remove '#' from begining of the url 

## To fix broken program installation error

    apt-get install --fix-brokern


## To refresh all raw data 

    rm -rf var/lib/apt/lists/*

>### (update package list using 'apt get update' after trying any below methods)  

<br/>

f - forcefully  
r - recursively 

---

## Use multiple commands in terminal  
<br/>

### 1. ';' operator :  

        cd ; ls       
    
(if 'cd' doesnt execute then 'ls' execute)

### 2. '&&' operator :

        cd && ls    

('cd' & 'ls' both commands are execute)

### 3. '||' operator :

        cd || ls    

(if 'cd' doesnt execute then 'ls' execute )


## Terminal Shortcuts  

#### TAB : Autocompletes names  
#### CTRL+C : Abort process manually  
#### CTRL+L : Clear the screen  
#### CTRL+D : Same as exit command  
#### CTRL+ALT+D : Minimize all terminal/windows  
#### CTRL+U : Clear line  
#### CTRL+Z : Suspend program in background (fg for revert)  
#### CTRL+A : to reach at the begining of the line  
#### CTRL+E : to reach at the end of the line  
#### CTRL+SHIFT+C : to copy in terminal  
#### CTRL+SHIFT+V : to paste in terminal  

