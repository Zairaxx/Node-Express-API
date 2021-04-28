import express from 'express';
import {
    getStudents,
    createStudent,
    editStudent,
    replaceStudent,
    deleteStudent,
    getStudentsByAge,
    getStudentsByName
} from '../controllers/students.js'
const router = express.Router()

router.get("/", getStudents)

router.get("/:age", getStudentsByAge)

router.get("/name/:name", getStudentsByName)

router.post("/createStudent", createStudent)

router.patch("/:id", editStudent)

router.put("/:id", replaceStudent)

router.delete("/:name", deleteStudent)

router.get("/hej", (req,res) => {
    console.log("Hej from Express Router");
    res.send("Hej from Express Router");
})

export default router