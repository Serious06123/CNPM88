const { json } = require('body-parser');
const express = require('express');

const router = express.Router();
const HisModal = require("../model/HisModel");



router.post('/', (req, res) => {
    const typeTime = req.body.typeTime;
    const idClinic = req.body.idClinic;
    const iduser = req.body.iduser;

    HisModal.findOne({
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

                HisModal.create({
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
router.get('/user/:id', (req, res) => {

    let id = req.params.id;


    if (id === 'all') {
        HisModal.find({})
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
        HisModal.find({ idClinic: id })
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
        HisModal.find({ iduser: id })
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