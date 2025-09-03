//prototyple inheritance

const teacher ={
    makeVideo : false
}

const user = {
    login:true
}

const teacherAbout = {
    isAvailable: true,
    fulltime:true,
    __proto__ : teacher     // inheriting properties of teacher
}

user.__proto__= teacher   // user can also access the properties of the user

//modern syntax

Object.setPrototypeOf(teacher,teacherAbout) // now teacher can access the property of teacherAbout
