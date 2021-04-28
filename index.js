import express from 'express'
import studentRoutes from './routes/students.js'
import teacherRoutes from './routes/teachers.js'
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use("/students", studentRoutes)
app.use("/teachers", teacherRoutes)

app.get("/", (req,res) => {
    res.send("Welcome to our API!");
})

app.get("/about", (req,res) => {
    res.send("<h1>Welcome to our about page!</h1>");
})

app.all("*", (req,res) => {
    res.send("Error! You seem lost, there is nothing here!")
})


app.listen(PORT, () => {
    console.log(`Server is now running on port: ${PORT} ` );
    // http://localhost:5000
});