import "./schedule.css"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getBook , hisBook } from "../../redux/actions";
import { useSelector } from "react-redux";
import { getCookie } from "../../Cookies";
import { createBook, deleteBook , createHisBook} from "../../api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StoreClinic1() {

    const [ref, setRef] = useState(false)

    const id = getCookie('id')


    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {

            dispatch(hisBook.hisBookRequest(id));
        }



    }, [dispatch, ref])

    const listBook = useSelector(state => state.hisMyBook.Data);
    //const hisBook = useSelector(state => state.hisMyBook.Data);
    const handleClickRemoveBook = (data) => {
        deleteBook(data)
        setRef(!ref)
        toast.success('Xóa Lịch Khám Thành Công !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }



    return (

        <>
    

            <div className="dovanngochuong">

                <div className="dovanngochuong_img"></div>

                <div className="noteforbook">

                    <p className="subtextname">AN TOÀN 5 BƯỚC- BẢO VỆ TỐI ĐA- AN TÂM THĂM KHÁM</p>

                    <span>✔ Bước 1: An toàn khi đến phòng khám</span> <br />

                    <span> ✔ Bước 2: An toàn khi tư vấn </span> <br />
                    <span>✔ Bước 3: An toàn khi chờ thăm khám</span> <br />
                    <span>✔ Bước 4: An toàn trong quá trình điều trị </span> <br />
                    <span>✔ Bước 5: An toàn sau điều trị </span> <br />



                </div>
                <ToastContainer></ToastContainer>
                  
            

            </div>


        </>

    );
    
}

export default StoreClinic1;