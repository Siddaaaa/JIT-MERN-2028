//bring express in Node.js
const express = require("express")
const cors = require("cors")
// create express app using what we imported
const app = express()


app.use(cors())

const tasks =[
    {
              id:1,
              title:"Learn React",
              description:"Understanding Components",
              status: "Completed"
          },
          {
              id:2,
              title:"Learn JavaScript",
              description:"Understanding Variables, Functions",
              status: "Pending"
          },
          {   id:3,
              title:"Learn MongoDB",
              description:"Understanding Databases",
              status: "Pending"
          }
];


app.get("/api/tasks", (req, res) => {
    res.json(tasks)
})

app.get("/", (req, res) => {
    res.send("Backend is Working!!")
});

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})