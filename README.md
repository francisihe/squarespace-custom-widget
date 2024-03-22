# Custom Search Widget + Custom React Frontend

This is being created as a custom solution for a client who insists on using a Squarespace frontend so as to allow for easy updates to their design templates.

The project is designed to facilitate seamless integration between a website builder application (such as SquareSpace, Wix etc), a React frontend, and an external backend API. It allows users to perform searches, sending the search data to a React frontend, which in turn forwards it to a backend API. Additionally, upon successful submission, the user is redirected to the React frontend where search results are displayed.

The website is a job board that allows potential users search for jobs using keywords and categories, which is sent to [redacted] api's endpoint.

This widget will make use of code injection to simply be inserted anywhere on their website they prefer the input section to be placed. 

![Sreenshot Showing Input Form Sample](<screenshots/Screenshot from 2024-03-21 02-17-02.png>)

## How it Works

1. The widget code can simply be copied and pasted on your web builder (SquareSpace, Wix, Elementor) using the code options

2. The widget accepts inputs in the keyword input box and the category dropdown, then sends this data to the custom frontend

3. The custom frontend has the preferred api integrated and will send this data to the provided endpoint and handle the results to display

## Sample Code (Notes)

Code is currently split into regular static website files with the regular HTML/CSS/JS file structure. 

The env.js file tests the flow using localhost. Widget code will simply be compiled into one file and injected where necessary on website builder.

## Project Owner
Name: Francis Ihejirika
Github: https://github.com/francisihe
Email: francis.ihejirika@gmail.com