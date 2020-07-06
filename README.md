# Posts Client

A simple client to see posts from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API

#### Definition

Create a react app that displays a list of posts from the specified REST API. Each post should display the title and 
body of the post, and username and city of the User that created it. When a client visits the page, the app should 
generate a random number that becomes the Client Id. The Client Id should be saved in browser local storage, unless an 
Id already exists. Bonus points for saving the API data in browser local storage and retrieving it on a subsequent 
visit.

**Notes** Feel free to start with create-react-app to save time setting up

##### Backend APIs

- https://jsonplaceholder.typicode.com/posts
- https://jsonplaceholder.typicode.com/users

#### Demo

You can view the fully working app [here](https://jf-marino.github.io/react-posts).

#### How to run locally

First pull all dependencies through the following command:

```bash
npm ci
```

Then you can start a development server by running
```bash
npm start
```

This will start a development server on `http://localhost:1234`.
