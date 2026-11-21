# Quora Clone – RESTful CRUD Operations

A simple **Quora-inspired web application** built using Node.js, Express.js, EJS, and JavaScript. This project demonstrates the implementation of RESTful routes and CRUD (Create, Read, Update, Delete) operations.

Users can create posts, view all posts, read individual posts, edit existing posts, and delete posts.

## 🚀 Features

- **View All Posts:** Display all available posts.
- **Create New Post:** Create a new post with a username and content.
- **View Single Post:** View the details of an individual post.
- **Edit Post:** Update the content of an existing post.
- **Delete Post:** Remove a post using its unique ID.
- **Unique IDs:** Generate unique IDs for posts using UUID.
- **Dynamic Templates:** Render dynamic web pages using EJS.
- **Method Override:** Use PATCH and DELETE methods through HTML forms.

## 🛠️ Technologies Used

- **Node.js** – JavaScript runtime environment.
- **Express.js** – Backend web framework.
- **EJS** – Embedded JavaScript templating engine.
- **HTML & CSS** – Frontend structure and styling.
- **JavaScript** – Application logic.
- **UUID** – Generate unique IDs for posts.
- **Method-Override** – Support HTTP PATCH and DELETE methods in HTML forms.

## 📂 Project Structure

```text
REST-CRUD-Operations/
│
├── node_modules/
│
├── public/
│   └── style.css
│
├── views/
│   ├── edit.ejs
│   ├── index.ejs
│   ├── new.ejs
│   └── show.ejs
│
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Navigate to the project directory**

```bash
cd REST-CRUD-Operations
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the server**

```bash
node index.js
```

**5. Open your browser**

```text
http://localhost:8080/posts
```

## 🔗 RESTful Routes

| HTTP Method | Route | Description |
|---|---|---|
| GET | `/posts` | Display all posts |
| GET | `/posts/new` | Show the new post form |
| POST | `/posts` | Create a new post |
| GET | `/posts/:id` | Display a single post |
| GET | `/posts/:id/edit` | Show the edit form |
| PATCH | `/posts/:id` | Update an existing post |
| DELETE | `/posts/:id` | Delete a post |

## 📚 Concepts Learned

Through this project, I practised and implemented:

- REST (Representational State Transfer) architecture.
- CRUD operations.
- RESTful routing.
- Express.js routing.
- HTTP methods (GET, POST, PATCH, DELETE).
- Middleware in Express.js.
- Request parameters (`req.params`).
- Request body (`req.body`).
- EJS templating and dynamic rendering.
- UUID for unique identification.
- Method Override.
- Redirects and response handling.
- Static file serving using Express.

## ⚠️ Note

This project currently uses an in-memory JavaScript array to store posts. Therefore, all posts are temporary and will be lost when the server restarts.

It is a learning project created to understand RESTful routing and CRUD operations.

## 👨‍💻 Author

**Rony Adhikary**

B.Tech Computer Science Student | Brainware University

GitHub: https://github.com/ronyadhikary250905-cloud

---

⭐ If you find this project interesting, feel free to explore the repository!
