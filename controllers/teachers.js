let teachers = [
    {
        name:"Brandon",
        age:26
    }
]

export const getTeachers = (req,res) => {
    res.send(teachers)
}

export const addTeacher = (req,res) => {
    let teacher = req.body;
    teachers.push(teacher);
    res.send(`${teacher.age}-year old ${teacher.name} has been added to list.`);
}