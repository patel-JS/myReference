# TailwindCSS

> ## Basic Installation
### Installation of tailwind css using Play CDN

    <script src="https://cdn.tailwindcss.com"></script>

> in npm  

    npm install -D tailwindcss postcss autoprefixer vite   

    npx tailwindcss init

>VsCode Extension Required
>> tailwind css intelisense

## package.json
    "scripts": {
    "start": "vite"
    },

## tailwind.config.js
    content: ["*"],

---

> ## Production Setup  
    npm init -y

    npm install -D tailwindcss postcss autoprefixer vite

    npx tailwindcss init -p

>Create a CSS file  

    code input.css

> add below code to input.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

> link CSS file to HTML 

### in <b>config.js</b> replace
    content:[] with content:["*]

### in <b> package.json</b> add  
    "scripts": {
    "start": "vite"
    },

### To start the server
    npm run start

---


## Fonts & Sizing

    font-sans => font family   
    font-bold => font weight   
    text-2xl  => font size   
    tracking  => letter spacking   

## Marging & Padding

    m-0 => margin 0
    ml  => margin left  
    mr  => margin right  
    mb  => margin bottom
    mt  => margin top

## Border
    border-2  => border thickness
    border-blue  => border color
    rounded      => border radious
    rounded full => rounded corner

## Square bracket notation

    mx-[64px]  => set custom value

> ## Responsive Design

### Breakpoints

    sm => small
    md => medium
    lg => large
    xl => extra large
    2xl = extra extra large

> Example   

    sm:bg-blue-800 md:bg-green-800 lg:bg-white-700

## Hover, Focus & Other States

    hover:
    focus:
    active:

> ## Customizing tailwind CSS
    npx tailwindcss init "flename" --full

> ### tailwind.config.js
    extend:{
        spacing:{
        13:'3.25rem';
        }
    font-size:{
        10xl:['9rem', {lineheight:'1.2'}]
        }
    }

---

### Some other useful tricks

    flex-col
    item-center
    justify-center

    text-center

    w-fit => fit element to content

> Adding favicon   

    <link rel="icon" type="image/png" href="favicon.png"/>