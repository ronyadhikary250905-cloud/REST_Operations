const express = require("express");
const app = express();

// Define the server port
const port = 8080;

// Import the path module to handle file paths
const path = require("path");

// Import UUID to generate unique IDs for posts
const { v4: uuidv4 } = require("uuid");

// Import method-override to use PATCH requests with HTML forms
const methodOverride = require("method-override");

// Middleware to read form data and store it in req.body
app.use(express.urlencoded({ extended: true }));

// Allow HTML forms to send PATCH requests using the _method query
app.use(methodOverride("_method"));

// Set EJS as the template engine
app.set("view engine", "ejs");

// Set the directory where EJS files are stored
app.set("views", path.join(__dirname, "views"));

// Serve static files such as CSS, images, and JavaScript
app.use(express.static(path.join(__dirname, "public")));


// Create an array containing sample posts
let posts = [
    {
        id: uuidv4(), // Generate a unique ID for this post
        username: "rahuladhikary",
        content: "I Love AIML"
    },

    {
        id: uuidv4(),
        username: "ronyadhikary",
        content: "I Love Devlopment"
    },

    {
        id: uuidv4(),
        username: "rimiadhikary",
        content: "I Love DSA"
    },

    {
        id: uuidv4(),
        username: "riyaadhikary",
        content: "I Love Cloud"
    }
];


// ROUTE 1: Display all posts
// GET /posts
app.get("/posts", (req, res) => {

    // Render index.ejs and pass the posts array to the template
    res.render("index.ejs", { posts });

});


// ROUTE 2: Display the form to create a new post
// GET /posts/new
app.get("/posts/new", (req, res) => {

    // Render the new.ejs page
    res.render("new.ejs");

});


// ROUTE 3: Create a new post
// POST /posts
app.post("/posts", (req, res) => {

    // Extract username and content from the submitted form
    let { username, content } = req.body;

    // Generate a unique ID for the new post
    let id = uuidv4();

    // Add the new post to the posts array
    posts.push({ id, username, content });

    // Redirect the user to the page displaying all posts
    res.redirect("/posts");

});


// ROUTE 4: Display a single post
// GET /posts/:id
app.get("/posts/:id", (req, res) => {

    // Extract the post ID from the URL
    let { id } = req.params;

    // Find the post whose ID matches the URL ID
    let post = posts.find((p) => id === p.id);

    // Check whether the post exists
    if (!post) {
        return res.status(404).send("Post not found!");
    }

    // Render show.ejs and pass the selected post
    res.render("show.ejs", { post });

});


// ROUTE 5: Update an existing post
// PATCH /posts/:id
app.patch("/posts/:id", (req, res) => {

    // Extract the post ID from the URL
    let { id } = req.params;

    // Get the updated content from the submitted form
    let newcontent = req.body.content;

    // Find the post that needs to be updated
    let post = posts.find((p) => id === p.id);

    // Check whether the post exists
    if (!post) {
        return res.status(404).send("Post not found!");
    }

    // Update the content of the selected post
    post.content = newcontent;

    // Redirect to the posts page without printing anything in the terminal
    res.redirect("/posts");

});


// ROUTE 6: Display the edit form for a particular post
// GET /posts/:id/edit
app.get("/posts/:id/edit", (req, res) => {

    // Extract the post ID from the URL
    let { id } = req.params;

    // Find the post that needs to be edited
    let post = posts.find((p) => id === p.id);

    // Check whether the post exists
    if (!post) {
        return res.status(404).send("Post not found!");
    }

    // Render edit.ejs and pass the selected post
    res.render("edit.ejs", { post });

});

// DELETE ROUTE - Delete a post using its ID
app.delete("/posts/:id", (req, res) => {

    // Extract the post ID from the URL
    let { id } = req.params;

    // Remove the post whose ID matches the given ID
    // filter() creates a new array containing only the posts
    // whose IDs do not match the given ID
    posts = posts.filter((p) => id !== p.id);

    // Redirect the user to the page displaying all posts
    res.redirect("/posts");

});


// Start the server and listen on port 8080
app.listen(port, () => {

    // Print a message when the server starts
    console.log(`Listening on port: ${port}`);

});