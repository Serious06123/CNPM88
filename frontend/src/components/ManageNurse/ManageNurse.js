
import "./ManageNurse.css"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFullUser } from "../../redux/actions";
import { deleteUser } from "../../api";
import { getuser } from "../../api";
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "../../components/Register/register"
function ManageNurse() {
const [ nurse , setNurse ] = useState( {
    nurse : []
} )
const [ref, setRef] = useState(false)
const dispatch = useDispatch();
    useEffect(() => {
        getuser('4')
        .then( data => {
            setNurse( {
                ...nurse,
                nurse : [ ...data.data.data ]
            } )
        } )
        .catch( err => console.log( err ) )
        
    }, [])
  
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const handleDeleteUserFromAdmin = (id) => {
        deleteUser(id)
        console.log(id);
        setRef(!ref)
        toast.success('Xóa Thành Công !', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className="manage_doctor">

                <div className="manage_patient">
                    <p className="text_head"> Quản Lý Y Tá </p>
                <div>
                <button style={{
                    padding : '10px 12px',
                    borderRadius : "15px",
                    marginTop : '10px',
                    cursor : 'pointer'
                
                }} onClick={openModal}>Thêm Y Tá</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                  <Register propNumber = '4'/>
                </Modal>
            </div>
                    <table>
                        <tr>
                            <th>Ảnh</th>
                            <th>Tên</th>
                            <th>Số Điện Thoại</th>
                            <th>Xóa</th>
                        </tr>
                        {nurse.nurse && nurse.nurse.length > 0 &&
                            nurse.nurse.map((patinet, index) => {
                                return (
                                    <tr key={index}>
                                        <td><img className="imgabcabcabcabc" style={{ height: '50px', width: "50px", borderRadius: "50px" }} src={patinet.avatar} alt="" /></td>

                                        <td>{patinet.name}</td>
                                        <td>{patinet.phonenumber}</td>
                                        <td><button onClick={() => handleDeleteUserFromAdmin(patinet._id)} className="button_delete_user"  > Xóa </button></td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>


            </div>

        </>
    );
}

export default ManageNurse;