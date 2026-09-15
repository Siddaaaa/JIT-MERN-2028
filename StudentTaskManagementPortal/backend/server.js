//bring express in Node.js
const express = require("express")
const cors = require("cors")
// create express app using what we imported
const app = express()


app.use(cors())
app.use(express.json())

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
          },
          {   id:4,
              title:"Learn Node.js",
              description:"Understanding Javascript",
              status: "Pending"
          }
];


app.get("/api/tasks", (req, res) => {
    res.json(tasks)
})

app.post("/api/tasks",(req,res)=>{
    const newTask = req.body
    tasks.push(newTask)
    res.json(newTask)
})


app.get("/", (req, res) => {
    res.send("Backend is Working!!")
});

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})