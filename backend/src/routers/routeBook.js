const { json } = require('body-parser');
const express = require('express');

const router = express.Router();
const BookModal = require("../model/BookModel");

router.post('/', (req, res) => {
    const typeTime = req.body.typeTime;
    const idClinic = req.body.idClinic;
    const iduser = req.body.iduser;

    BookModal.findOne({
        typeTime: typeTime,
        idClinic: idClinic,
        iduser: iduser
    })
        .then(data => {
            if (data) {

                res.json({
                    message: 'Đã tồn lại lịch khám này',
                    errcode: 1,
                    data: data
                })


            }
            else {

                BookModal.create({
                    typeTime: typeTime,
                    idClinic: idClinic,
                    iduser: iduser,
                })
                    .then(data => {
                        res.json({
                            message: 'Đã tạo lịch khám thành công',
                            errcode: 0,
                            data: data
                        })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json('error from server');
                    })

            }
        })




})

router.delete('/user/:id', (req, res) => {
   
    let id = req.params.id;
    console.log(id);
    BookModal.deleteOne({ _id: id })
        .then(data => console.log(data))
        .catch(err => console.log(err))



})

router.get('/user/:id', (req, res) => {

    let id = req.params.id;


    if (id === 'all') {
        BookModal.find({})
            .populate('idClinic')
            .populate('iduser')
            .then(data => {
                res.json({
                    message: 'get book success',
                    data: data
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json('error from server');
            })

    }

    else if (id === "66c877cd849f4e9a71fe7e15" || id === '66c88278849f4e9a71fe7e52' || id === "66c88725849f4e9a71fe7e5d") {
        BookModal.find({ idClinic: id })
            .populate('idClinic')
            .populate('iduser')
            .then(data => {
                res.json({
                    message: 'get book by idClinic success',
                    data: data
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json('error from server');
            })

    }

    else {
        BookModal.find({ iduser: id })
            .populate('idClinic')
            .populate('iduser')
            .then(data => {
                res.json({
                    message: 'get book by id success',
                    data: data
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json('error from server');
            })

    }
})
module.exports = router