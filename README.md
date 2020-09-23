# Portfolio Website

This is the where final, optimized frontend and backend projects are combined and served with different routes and middleware.

### `Websites:`

[abarbieux.com](https://www.abarbieux.com) || [barbieux.dev](https://barbieux.dev) Both currently point to the same source

---

## Related Repos

### `Front End:`

[portfolio-frontend](https://github.com/abarbieu/portfolio-frontend) ~ The front end of a fully fledged portfolio website built with ReactJS in Typescript. Includes scripts and components that automatically generate content from photo folders, JSON files, and a back end interface.

### `Back End:`

[portfolio-backend](https://github.com/abarbieu/portfolio-backend) ~ A backend interface hosting RESTful APIs and logging middleware, built with NodeJS, Express, and 

## Features/Components:

### [`Dynamically Animated 'Tree Menu':`](https://github.com/abarbieu/portfolio-frontend#Tree-Menu) 

Automatically generates an animated menu system of links, routes, and children based on a provided JSON file
  
### [`Full Photo Gallery:`](https://github.com/abarbieu/portfolio-frontend#Photo-Gallery)

Creates a stylized photogallery with dynamically sized layouts, full modal carousel viewer with fullscreen capability. Includes a script to generate a catalog JSON file with automatically shrinked thumbnails and src sets

### [`About Me Page`](https://github.com/abarbieu/portfolio-frontend#About-Me)

Renders an about me page with parallax banners and card links to routes. Automatically scaled using React-Bootstrap's flexbox layout system.

### [`Editable, Expandable, and Archiveable, Notes Page:`](https://github.com/abarbieu/portfolio-frontend#Notes-Page)

  Renders fully editable and expandable notes and archive from a database, ordered by severity and date. Contains a form for note title and content as well as a severity slider and archive functionality.

### [`Notes Database:`](https://github.com/abarbieu/portfolio-backend#Todolist-API)

Manage todolist items using a PostgreSQL database
  
### [`Auto Mailer:`](https://github.com/abarbieu/portfolio-backend#Auto-Mailer)

Send email forms using nodemailer

### [`Logging Middleware:`](https://github.com/abarbieu/portfolio-backend#Logger)

Middleware that saves all visits to a logs file containing **time, location and IP** information

---

# Additional info

<details>
 <summary>Reference Guides</summary>

## Frontend:

* [React Bootstrap docs](https://react-bootstrap.netlify.app/getting-started/introduction/)
* [Styled Components](https://styled-components.com/docs)
* [Gallery Grid](https://www.npmjs.com/package/react-photo-gallery)
* [Image Gallery (Carousel)](https://www.npmjs.com/package/react-image-gallery) 
* [Graphics Magick](https://aheckmann.github.io/gm/docs.html)

## Backend:

* [Setting up a RESTful API with Node.js and PostgreSQL](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/)

* [How to install PostgreSQL on Ubuntu 14.04](https://www.godaddy.com/garage/how-to-install-postgresql-on-ubuntu-14-04/)

* [PostgreSQL documentation](https://www.postgresql.org/docs/)

* [w3schools SQL tutorial](https://www.w3schools.com/sql/)

* [PostgreSQL datatypes](https://www.guru99.com/postgresql-data-types.html)

</details>


<details>
 <summary>Reactjs details</summary>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
</details>