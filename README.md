React Intro
===========

This sample uses Redux to store state.

The MyInput component still keeps its own state but does invoke the function of
the parent with the value when the submit button is pressed.  This causes
MyInputContainer to update the value in the Redux store.

MyDisplayContainer retrieves the value from the Redux store and displays the value
without the need to know anything of MyInput.

Building and Running:
---------------------
Install the dependencies:
  `npm install`

Run the application:
  `npm start`  

Open in browser:
  `http://localhost:8080`
or for the advanced webpack development server features:
  `http://localhost:8080/webpack-dev-server/index.html`
