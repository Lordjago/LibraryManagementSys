const Book = require('../model/model')

exports.getIndex = (req, res) => {
    res.send('Im Working');
};

// exports.postBorrowBook = (req, res) => {
//     const borrower_details = new Book(req.body);
//     borrower_details.save();
//     res.send(borrower_details);
// }