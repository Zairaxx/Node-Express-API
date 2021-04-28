let students = [
    {
        name:"Skalman",
        age:39
    },
    {
        name:"Bamse",
        age:36
    },
    {
        name:"Lille Skutt",
        age:36
    }
]

export const getStudents = (req,res) => {
    res.send(students);
    console.log("hej")
}

export const createStudent = (req,res) => {
    students.push(req.body);
    res.send(`Added student with name ${req.body.name}`)
}

export const editStudent = (req,res) => {
    let student = students.find(student => student.name === req.params.id);
    student.age = req.body.age;

    res.send(`Updating ${student.name}'s age to ${student.age}`);
}

export const replaceStudent = (req, res) => {
    let student = students.find(student => student.name === req.params.id);
    student.name = req.body.name;
    student.age = req.body.age;
    res.send(`Student replaced, new student is ${student.name}`);
}

export const deleteStudent = (req,res) => {
    let newStudents = students.filter(student => student.name !== req.params.name);
    students = newStudents
    res.send(`Students called ${req.params.name} have been kicked from class!`);
}

export const getStudentsByAge = (req,res) => {
    let newStudents = students.filter(student => student.age == req.params.age);
    res.send(newStudents);
}

export const getStudentsByName = (req,res) => {
    let newStudents = students.filter(student => student.name == req.params.name);
    res.send(newStudents);
}