import "./booking.css";
import { useState } from "react";
import { getCookie } from "../../Cookies";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createBook, createContact } from "../../api";



function Booking() {


    // const notify = (data) => toast(data);

    const role = getCookie('role')

    const idUser = getCookie('id');

    const [contact, setContact] = useState({

        fullname: "",
        phone: "",
        text: ""

    })

    const [data, setData] = useState({
        typeTime: "9:00",
        idClinic: "66c877cd849f4e9a71fe7e15",
        iduser: idUser
    })




    const handleClickToContact = async () => {
        await createContact(contact)
            .then(function (response) {
                toast.success('Tạo Liên Hệ Thành Công !', {

                    position: "bottom-left",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        setContact({

            fullname: "",
            phone: "",
            text: ""

        })
    }
    const handleCreateBook = () => {


        createBook(data)
            .then(

                res => {
                    if (res.data.errcode === 1) {
                        toast.error(' Đã tồn tại lịch khám !', {
                            position: "bottom-left",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                    else {
                        toast.success('Tạo Thành Công !', {

                            position: "bottom-left",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });

                    }

                }

            )
            .catch(function (error) {
                console.log(error);
            });




    }


    // const errcode = useSelector(state => state.getErrCodeBook.errCode)
    // console.log('errcode:', errcode);




    // if (errcode === 0) {
    //     notify('thành công')
    // }
    // else {
    //     notify('thất bại')
    // }

    return (<>
        <div id="booking">
            <div className="container booking">
                <h1 className="booking_name"> Đặt Lịch Khám Trong Ngày</h1>
                {role ?
                    <div className="booking_content">
                        <div className="booking_input">
                            <select name="typetime" id="typetime" form="carform" onChange={(e) => setData({ ...data, typeTime: e.target.value })}>
                                <option value="9:00" selected>9:00</option>
                                <option value="12:00">12:00</option>
                                <option value="15:00">15:00</option>
                            </select>

                            <select name="clinic" id="clinic" form="carform" onChange={(e) => setData({ ...data, idClinic: e.target.value })}>
                                <option value="66c877cd849f4e9a71fe7e15" selected>Phòng Khám Bệnh</option>
                                <option value="66c88278849f4e9a71fe7e52">Phòng Nội Soi</option>
                                <option value="66c8a450849f4e9a71fe7e6e">Phòng Ngoại Tổng Hợp</option>
                            </select>
                            <br />
                            <button onClick={handleCreateBook} > SEND </button>
                        </div>
                        <div className="booking_img">

                        </div>
                        <ToastContainer />


                    </div>
                    :
                    < >

                        <div className="booking_content">
                            <div className="booking_input">
                                <input value={contact.fullname} onChange={(e) => setContact({ ...contact, fullname: e.target.value })} placeholder="Họ Và Tên..." />
                                <input value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} placeholder="Số Điện Thoại..." />
                                <input value={contact.text} onChange={(e) => setContact({ ...contact, text: e.target.value })} placeholder="Tình Trạng..." />

                                <br />
                                <button onClick={handleClickToContact} > SEND </button>
                            </div>
                            <div className="booking_img">

                            </div>
                            <ToastContainer />


                        </div>






                    </>
                }

            </div>
        </div>

    </>);
}

export default Booking;