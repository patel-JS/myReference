## CSS Animations  
---
<br/> 

>identifier  

    animation-name: change-bg-clolor;

>duraction

    animation-duration: 3s;

>delay

    animation-delay: 2s;

>iteration

     animation-iteration-count: 3;

>fill-mode

    animation-fill-mode: forwards;

><b>shorthand</b> 

    animation: change 3s forwards 1s infinite ease-in-out;
---  

<br/>  

>## Transition 
<br/>

    transition: background 1s ease-in-out,
                     width 1s ease-in-out,
                    height 1s ease-in-out;
                    
>shorthand  

    transition: all 1s ease-in-out;

---  

<br/>

>## Tranform
<br/>

### rotate  

    transform: rotate(10deg); 

to change origin point

    transform-origin: 0% 100%;
    transform-origin: top left;

### scale  

    transform: scaleX(1.5);
    transform: scaley(1.5);

    transform: scale(1.2,2); //SHORTHAND

### transform  

    transform: translateX(50px);           
    transform: translateY(50px);  

    transform: translate(50px,50px); //SHORTHAND

### skew  

    transform: skewX(25deg);
    transform: skewY(25deg);
    transform: skew(25deg, 25deg);
---
<br/>


>## Examples  
<br/>

### from - to

    @keyframes change-bg-clolor{
        from{
            background-color: #046450;
            border-radius: 0;
            }
        to{
            background-color: #01120E;
            border-radius: 50px;
            }
        }

### 0%-100%    

    @keyframes change-bg-color {  
        0%{  
            top: 0;  
            left: 0px;  
            border-radius: 10px;  
        }  
        25%{  
            top: 0;  
            left: 250px;  
            border-radius: 20px;  
        }
        50%{
            top: 250px;
            left: 250px;
            border-radius: 30px;
        }
        75%{
            left: 0;
            top: 250px;
            border-radius: 40px;
        }
        100%{
            left: 0;
            top: 0;
            border-radius: 50px;
        }
