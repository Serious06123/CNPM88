import Slideshow from "../SliderShow/SliderShow";


import "./home.css"
function Home() {
    return (
        <>
            <div id="homepage">
                <>
                    <Slideshow />
                </>
              <div className="lichkhamnhakhoa">
                <div className="anhdepnhakhoa anhdepnhakhoa1"></div>
                <div className="anhdepnhakhoa anhdepnhakhoa2"></div>

              </div>
                {/* <div className="homepage_img"></div> */}
                <div className="text_sub">

                    <div className="chusub"> <p className="head1"> GIỚI THIỆU BỆNH VIỆN </p>
                        <p className="head2"> Bệnh viện đa khoa sài gòn  </p>
                        <p className="head3">“Bệnh viện Đa Khoa Sài Gòn là một trong những cơ sở y tế lớn và uy tín tại thành phố Hồ Chí Minh, Việt Nam. Bệnh viện này cung cấp dịch vụ y tế đa dạng và chất lượng cho cộng đồng, từ khám chữa bệnh đến các dịch vụ y tế chuyên sâu.” </p>
                        <p className="head3">Bệnh viện Đa Khoa Sài Gòn được trang bị cơ sở vật chất hiện đại, trang thiết bị y tế tiên tiến và đội ngũ y bác sĩ, y tá chuyên nghiệp, giàu kinh nghiệm. Đây là điểm đến tin cậy cho người dân khi cần tìm kiếm sự chăm sóc sức khỏe đáng tin cậy. </p>
                        <p className="head3">Chúng tôi không ngừng lắng nghe và ghi nhận chia sẻ từ khách hàng để nâng chuẩn cơ sở vật chất, tay nghề bác sĩ, quy trình tư vấn tận tâm và dốc lòng chăm sóc khách hàng trước, trong và sau dịch vụ.</p>
                    </div>
                    <div className="anh_sub"></div>
                </div>
                <p className="dichvuphongkham"> Dịch vụ tại phòng khám </p>
                <div className="home container">
                    <div className="home_item">
                        <div className="home_item_img home_item_img_1"></div>

                        <div className="home_item_content"><p> Dịch Vụ Khám Sức Khỏe </p> <br />Tại Bệnh viện Đa khoa Sài Gòn, chúng tôi cung cấp các gói khám sức khỏe toàn diện cho cả nam và nữ phù hợp với mọi lứa tuổi.</div>
                    </div>
                    <div className="home_item">
                        <div className="home_item_img home_item_img_2"></div>

                        <div className="home_item_content"> <p> Đục Thủy Tinh Thể </p> <br /> Tại Bệnh viện Đa khoa Sài Gòn, chúng tôi cung cấp các gói khám sức khỏe toàn diện cho cả nam và nữ phù hợp với mọi lứa tuổi.</div>
                    </div>
                    <div className="home_item">
                        <div className="home_item_img home_item_img_3"></div>

                        <div className="home_item_content"> <p> Khu Khám Dịch Vụ </p> <br /> Tại Bệnh viện Đa khoa Sài Gòn, chúng tôi cung cấp các gói khám sức khỏe toàn diện cho cả nam và nữ phù hợp với mọi lứa tuổi.</div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Home;