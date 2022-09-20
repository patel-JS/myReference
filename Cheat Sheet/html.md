# HTML

- Difference between Tag vs Element in HTML
    
    ```
    <h1> </h1>   <=== Tag
    ```
    
    ```markdown
    <h1> Hello World </h1>   <=== Element
    ```
    

- Simple HTML Document / Structure
    
    ```markdown
    <!Doctype HTML> ===> Let the Browser know it's an HTML5
    
    <html> ===> Root of an HTML element
    
    <head>
        <title>Home Page </title> ===> Contain the information about the HTMLdocument
    </head>
    
    <body>
    	<h1>Hello World</h1> ===> Contains everything you want to display on the web page
    </body>
    ```
    
- Attributes
    - Attributes are along with the HTML tags to define the characteristics of the element
    - Attributes provide additional information about elements

- Heading Text Sizes
    - h1 → 36px
    - h2 → 30px
    - h3 → 24px
    - h4 → 18px
    - h5 → 14px
    - h6 → 12px
- HTML Comment
    
    `<!— Commented Text —>` 
    
- Text Formatting
    
    <B> ⇒ Bold text
    
    <strong> ⇒ Important Text
    
    <i> ⇒ Italic text
    
    <em> ⇒ Emphasized Text
    
    <mark> ⇒ Marked Text
    
    <small> ⇒ Smaller text
    
    <del> ⇒ Deleted Text
    
    <ins> ⇒ Inserted text
    
    - To write right to left
        
        ```jsx
        <bdo dir=”ltr”> Never Give Up</bdo>
        ```
        
    - To write left to right
        
        ```jsx
        <bdo dir=”rtl”> Never Give Up</bdo>
        ```
        
- Empty Element
    
    
    - Empty elements also called self closing or void elements
    - HTML tag  which do not have closing tags or don not need to be closed are void elements
    
    - <br> ⇒ The line break element
        - used to insert a single line break
    - <hr> ⇒ The horizontal rule element
        - Display as a horizontal rule that is used to separate content in an HTML page
- <pre>: The Preformatted Text element
    
    The **`<pre>`** HTML element represents preformatted text which is to be presented exactly as written in the HTML file. 
    
- How to Add CTA
    - Call
        
        ```jsx
        < a href=”tel:+919876543210”>+919876543210</a>
        ```
        
    - Mail
        
        ```jsx
        < a href=”mailto:contact@constjs.com”>contact@constjs.com</a>
        ```
        
    - Download
        
        ```jsx
        <a href=”demo.pdf”>Download Now</a>
        ```
        
- Difference between Absolute Path & Relative path
    - Absolute Path :
        - An absolute path is defined as specifying the location of a file or directory from the root directory(/). In other words, we can say that an absolute path is a complete path from start of actual file system from / directory.
        - <img src=”E:/system/project/html/images/demo.jpg”>
        
    - Relative path :
        - Relative path is defined as the path related to the present working directly.
        - <img src=”images/demo.jpg”>
        - <img src=”https://www.pexels.com/photo/four-letter-tiles-1591061/”>
- How to make image clickable
    
    ```jsx
    <a href="www.example.com" target="_blank">
            <img src="/images/demo.png" alt="demo image">
        </a>
    ```
    
- `<picture>`
    
    ```html
    <picture>
        <source srcset="./images/demo.webp">
        <source srcset="./images/demo.png">
        <img src="./images/demo.jpg" alt="demo img" width="300">
    </picture>
    ```
    
- `<figure>`
    
    ```html
    <figure>
        <img src="./images/demo.jpg" alt="demo image">
        <figcaption>Demo image for test</figcaption>
    </figure>
    ```
    
- Elements
    - Semantic Element : Elements with  a meaning
        
        Ex : `<header>`, `<nav>`, `<main>`, `<section>`, `<table>`, `<form>`, `<footer>`
        
    - Non-semantic Element : elements with  a no meaning
        
        Ex : `<div>`, `<span>`
        
- HTML List
    - HTML lists allow web developers to group a set of related items in lists
    - Unordered List
        - The list items will be marked with bullets by default
        - `<ul> <li> </li> </ul>`
        - Style : Disc, circle & square
    - Ordered List
        
        The list items will be marked with numbers by default
        
        - `<ol> <li </li> </ol>`
        - Type :  1, A, a, I, i
    - 
- HTML Tables
    
    HTML tables allow web developers to arrange data into rows & columns.
    
    We have to write everything inside the table tag.
    
- HTML Form
    - The `<form>` tag is used to create an HTML form for user input
    - The input HTML element is used to create interactive controls for web based forms in order to accept data from the user.
    - We have to write inside the `<form>` tag
- Difference between Select-Option vs Data list-Option
    - If the user must enter one of your choices, use the select element.
    - IF the user can enter whatever, use the Data list elements.
- Difference between id attribute & class attribute
    - Multiple element in HTML can have the same value, Whereas a  value of id attribute must be unique.
- HTML iframe
    - The `<iframe>` HTML element represent a nested browsing context, embedding another HTML page into the current one.
- How to create a nested webpage in HTML?
    - The HTML iframe tag is used to display a nested webpage, in simple, it represent a webpage within a webpage
- HTML Video
    - The `<video>` HTML element embeds a media player which supports video playback into the document
    
    ```
    <video width="500" controls autoplay muted loop>
            <source src="./videos/demo.mp4" type="video/mp4" >
        </video>
    ```
    
- HTML Audio
    - The `<audio>` HTML element is used to embed sound content in documents
        
        ```html
        <audio controls src="./audios/demo.mp3"></audio>
        ```
        
        ```html
        <audio controls>
                <source src="./audios/demo.mpeg">
            </audio>
        ```
        

## FORM

- Value attribute specifies an initial value for an input field
- Read only attribute specifies that an input field is read only
- Disabled attribute specifies that an input field should be disabled
- Size attribute specifies the visible width, in characters, of an input field
- Max length attribute specifies the maximum numbers of characters allows in an input field
- Min and Max attributes specify the minimum and maximum values for an input field
- Multiple attributes specifies that the user is allowed to enter more than one value in an input field
- Placeholder attributes specifies a short hint that describe the expected value of an input field (a sample value or a short description of the expected format)
- Required attributes specifies that an input field must be filled out before submitting the form
- Autofocus attributes specifies that the input field should automatically get focus when the page loads
- Autocomplete attributes specifies whether a form or an input field should have autocomplete on or off

- Difference between Select-Option vs Datalist-Option
    - List attribute refers to a `<datalist>` element that contains pre-defined options for an `<input>` element

## HTML SEO

1. Add a **page title** and **Description** (Meta Tag)
2. use **H1 tag** once in  a page
3. Add **alt tag** in images & videos and also **compress** the images size
4. Add **open graph** tags
5. **Responsive** site meta tag