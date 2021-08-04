let borrowers = [];

module.exports = class Book {
    constructor(name, surnmae, gender, matric_no, level, department, faculty, borrower_no, date, session, phone, hall, room_no) {
        this.id = borrowers.length + 1;
        this.name = name;
        this.surnmae = surnmae;
        this.gender = gender;
        this.matric_no = matric_no;
        this.level = level;
        this.department = department;
        this.faculty = faculty;
        this.borrower_no = borrower_no;
        this.date = date;
        this.session = session;
        this.phone = phone;
        this.hall = hall;
        this.room_no = room_no;

    }

    // save(){
    //     borrowers.push(this);
    // }

    // static getAllBooks(){
    //     return borrowers;
    // }

}