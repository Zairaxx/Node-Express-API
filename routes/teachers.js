import express from 'express';
import {getTeachers, addTeacher} from '../controllers/teachers.js'
const router = express.Router();


router.get("/", getTeachers)

router.post("/addTeacher", addTeacher)

router.all("*", (req,res) => {
    res.send("You're trying to reach the teachers, but you're using the wrong URL");
})

export default router