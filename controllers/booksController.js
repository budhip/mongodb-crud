const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID

let url = 'mongodb://localhost:27017/library';

function getAllBooks (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log(err);
    } else {
      db.collection('books').find().toArray(function (err, result) {
        if (err){
          console.log(err);
        } else {
          res.send(result)
        }
      })
    }
  })
}

function getSingleBook (req, res) {
  MongoClient.connect(url, function (err, db) {
    var objId = ObjectID(req.params.id)
    console.log(objId);
    if (err) {
      console.log(err);
    } else {
      db.collection('books').find({_id: objId}).toArray(function (err, result) {
        if (err){
          console.log(err);
        } else {
          res.send(result)
        }
      })
    }
  })
}

function addNewBook (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log(err);
    } else {
      db.collection('books').save({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      },function (err, result) {
        if (err){
          console.log(err);
        } else {
          res.send(result)
        }
      })
    }
  })
}

function updateBook (req, res) {
  MongoClient.connect(url, function (err, db) {
    var objId = ObjectID(req.params.id)
    if (err) {
      console.log(err);
    } else {
      db.collection('books').update({_id: objId},{
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      },function (err, result) {
        if (err){
          console.log(err);
        } else {
          res.send(result)
        }
      })
    }
  })
}

function deleteBook (req, res) {
  MongoClient.connect(url, function (err, db) {
    var objId = ObjectID(req.params.id)
    console.log(objId);
    if (err) {
      console.log(err);
    } else {
      db.collection('books').deleteOne({
        _id: objId
      },function (err, result) {
        if (err){
          console.log(err);
        } else {
          res.send(result)
        }
      })
    }
  })
}

module.exports = {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateBook,
  deleteBook
}
