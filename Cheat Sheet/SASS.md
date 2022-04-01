# SASS : CSS Pre-Processor

>## node.js Setup

### Installation for node.js
    npm init  
    npm install node-sass --save-dev

### Folder Structure
    + SCSS 
        + CSS
            - style.css
        + SASS
            - main.scss

### Link CSS in index.html
    <link rel="stylesheet" href="CSS/style.css">

### package.json > Add following script
    "scripts": {
    "compile:sass" : "node-sass SASS/main.scss CSS/style.css -w" 
    },


### To compiling SCSS, run following commands
    npm run compile:sass

---

>## VsCode Setup :

### Required VsCode Extension : <b>Live SASS Compiler</b>

### Link CSS in index.html
    <link rel="stylesheet" href="SCSS/main.css">

---

# SASS

>1. Operator 
    
        p{
            font-size: 1rem + 0.2rem;
        }
   

>2. Variables 
    
        $primary-col : #e63946;
        $secondry-col : #457b9d;
        $bg-col : #f1faee;
        $text-col : #1d3557;

>3. Nexting

        .app-flex{  
            margin: 0 auto;  
            width: 30vw;  
            height: 25vh;  
        
            .head-text{
                color: $bg-col;
            }

                p{
                    color: $text-col;
                    font-size: 1rem + .2rem;
                }
    }

>4. Mixin 

        @mixin flex {display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;}

>5. Parameter 

        @mixin border($size, $col, $rad) {
            border: $size solid $col;
            border-radius: $rad;
        }

>6. Partials 

    @import 'var';    || "./SCSS/_var.scss";
    @import 'mixin';  || "./SCSS/_mixin.scss";


---

## To install for React

    npm install --save-dev node-sass

    

    
    

