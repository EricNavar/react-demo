
# Links from meeting

Slide deck: [Link](https://docs.google.com/presentation/d/1TEOyeBTv_YNYvWB07-6qqlbum1yCFO6jlRl_pqYm4QM/edit?usp=sharing)

GitHub Repository: [https://github.com/EricNavar/react-demo](https://github.com/EricNavar/react-demo)

-   Updated code with everything made during meeting is on master branch
    
-   The code from when the meeting started is on the starter-code branch
    

Recording on YouTube: [Link](http://google.com)

Code Sandbox with the starter code: [bit.ly/ssd-frontend](http://bit.ly/ssd-frontend)

# Resources

## MDN Docs

-   JavaScript docs
    
-   [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    

## W3Schools

-   HTML, CSS, and JavaScript docs (although MDN’s JavaScript docs are better)
    
-   [https://www.w3schools.com/html/](https://www.w3schools.com/html/)
    
-   [https://www.w3schools.com/js/](https://www.w3schools.com/js/)
    
-   [https://www.w3schools.com/css/](https://www.w3schools.com/css/)
    

## Lighthouse Measure

-   Run tests and see metrics on site performance, accessibility, SEO, and best practices.
    
-   [https://web.dev/measure/](https://web.dev/measure/)
    
-   Also accessible from the Chrome dev tools
    

## GitHub Student pack

-   Sign up for the GitHub student pack and get free resources from all sorts of services like domains, hosting, icons, testing suites, and more
    
-   Free as long as you’re a student
    
-   [https://education.github.com/pack](https://education.github.com/pack)
    

# Setting up a coding environment

-   Download node.js
    

-   [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
    

-   Download Visual Studio Code
    
-   Download Visual Studio Code plugins (not necessary, but it may make coding easier with syntax highlighting andautocomplete)
    
	-   ESLint
    
	  -   HTML Format
    
	-   npm
    
	-   npm Intellisense
    
	-   Path intellisense
    
	-   React Extension Pack
    

-   Browser
    

	-   Firefox and Chrome are the best for web dev. Don’t use Safari 🤢
    

# Creating a React App

-   In the command line, go to the directory where you want to host your app.
    
-   Run npx create-react-app app-name
    

	-   Except replace app-name with the name of your app
    

-   To go into the new project, run cd app-name
    
-   Run the app with npm start
    

# npm packages

## What are they?

You have to have node.js installed to install node packages. npm stands for node package manager. It’s a collection of libraries that can help you out with anything. Search for libraries on [https://www.npmjs.com/](https://www.npmjs.com/)

## Packages to look into

### React Router

-   Install with npm install react-router-dom
    
-   Easily have multi-page websites
    
-   [https://reactrouter.com/docs/en/v6/getting-started/overview](https://reactrouter.com/docs/en/v6/getting-started/overview)
    
-   Use v6, the latest version
    

### Material UI

-   Material UI is a set of design guidelines made by Google. Someone took it and made a library of React components that implements these guidelines
    
-   [https://mui.com/](https://mui.com/)
    
-   Install with npm install @mui/material @emotion/react @emotion/styled
    

### Styled components

-   Allows you to create reusable components by adding CSS to an HTML tag
    
-   Adds extra CSS after compiling to ensure that it will run on all browsers
    
-   Install with npm install --save styled-components
    

### ESLint

-   JavaScript is an ugly piece of shit language. Are semicolons necessary? Do you need single or double quotes for strings? Doesn’t matter! ESLint is helpful in finding poor programming practices and can help enforce a common coding style.
    
-   Install with npm install eslint --save-dev
    

### dotenv

-   Manage environment variables. See below for more details on what environment variables are.
    
-   Install with npm install dotenv --save
    

# Deployment
## GitHub Pages
- Host basic HTML/CSS/vanilla JavaScript websites
- Free
- Go to the settings tab of your repository, then click on the "Pages" tab, then choose which branch you want to deploy
- can't deploy React apps

## Heroku
- Popular way for beginners to deploy React apps
- Easiest way to host a React app. Choose which branch you want to deploy, specify what command is needed to run is, (most likely npm start) and it will deploy
- Server goes to sleep after 30 minutes of inactivity, may take 20-40 seconds for a React app to start again if it's big

## AWS Amplify
- Like Heroku but much more powerful
- Has integration with many other AWS services.
	- ex: easily buy a domain and get an SSL certificate and hook it up with your website
	- use API Gateway to make API calls, connect to databases
- Your website will automatically rebuild and redeploy when your branch is updated on GitHub
- Server does not go to sleep like Heroku does
- Pay based on usage, but very, very cheap (a penny per month for a resume site)

## NGrok
-   Create temporary deployments. Good for demos like in hackathons

## Others
- Google Cloud probably has its own thing and students get like $300 of free credit

# Other things to research on your own and I didn’t get to cover

**Environment variables**

-   Frontend code is all code that is sent to a browser, so you don’t want your frontend to include credentials, API keys, database keys, etc. You would keep these keys as "environment variables" in a file, which would not be pushed to git history (specify the file in .gitignore).
- Look more into environment variables to see how to keep your keys safe. dot-env is a good library to help with this.
- https://trekinbami.medium.com/using-environment-variables-in-react-6b0a99d83cf5
-   Importance: necessary for real websites
    

**TypeScript**

-   this is a language that compiles to JavaScript. It’s mostly the same syntax, but it enforces types and stricter coding rules and validates parameters and has enums.
    
-   Importance: high
    

**Lazy loading**

-   Affects order that things load. If there’s something like an image or something at the bottom of the screen that will take a long time, let it load after everything else loads so it doesn’t hold everything else back.
    
-   Importance: high
    

**Flask**

-   make websites with Python🐍
    
**CSS Preprocessors**

-   Ex: SASS, LESS
    
-   A language that compiles to CSS and can be a bit easier
    

**Bootstrap**
- Bootstrap_is the most popular CSS Framework for developing responsive and mobile-first website
- Get a license through the GitHub student pack
- Be careful because it can introduce a bit a bloat
