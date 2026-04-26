const studentData = [
  { ID: 101, name: 'Alice Smith', course: 'Computer Science', marks: 92 },
  { ID: 102, name: 'Bob Jones', course: 'Information Technology', marks: 85 },
  { ID: 103, name: 'Charlie Brown', course: 'Data Science', marks: 78 }
];

const getStudentData = (req, res) => {
  const user = req.user;

  if (!user || user.role !== "admin") {
    return res.status(400).json({
      "error": "Acesses Denied",
    })
  }

  return res.status(200).json({
    "data": {
      studentData
    },
    "sucess": "Scuessfully Data sended"
  });
}

export {
  getStudentData
}