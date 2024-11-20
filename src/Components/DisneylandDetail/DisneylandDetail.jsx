import React, { useState } from "react";
import "./DisneylandDetail.css";

const DisneylandDetail = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // ข้อมูลรูปภาพสำหรับ carousel
  const carouselImages = [
    {
      id: 1,
      src: "https://www.pelago.com/img/products/JP-Japan/tokyo-disneyland-tickets-1-day-pass/0308-0202_tokyo-disneyland-tickets-1-day-pass-japan-pelago0-xlarge.jpeg",
      alt: "tokyo disneyland View",
    },
  ];

  return (
    <div className="pb-5">
      {/* Hero Carousel */}
      <div
        className="carousel slide position-relative"
        style={{ maxHeight: "600px", overflow: "hidden" }}
      >
        <div className="carousel-inner">
          {carouselImages.map((image, index) => (
            <div
              key={image.id}
              className={`carousel-item ${
                index === activeSlide ? "active" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="d-block w-100"
                style={{ height: "600px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-5">
        {/* Introduction Section */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 mb-3">Tokyo Disneyland</h1>
            <p className="lead">
            โตเกียวดิสนีย์แลนด์เป็นสวนสนุกที่ได้รับความนิยมสูงสุดในญี่ปุ่น เปิดให้บริการตั้งแต่ปี 1983 โดยเป็นส่วนหนึ่งของสวนสนุกดิสนีย์ที่มีความเป็นเอกลักษณ์เฉพาะตัว รวมทั้งการแสดงโชว์และเครื่องเล่นที่น่าตื่นเต้นเหมาะสำหรับทุกวัย
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://travel.mthai.com/app/uploads/2019/04/tokyodisneysea.jpg"
              alt="Disneyland Overview"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-light p-4 rounded shadow-sm mb-5">
          <h2 className="text-center mb-4">ไฮไลท์การท่องเที่ยว</h2>
          <div className="row">
            <div className="col-md-4 mb-3 d-flex align-items-stretch">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">ปราสาทซินเดอเรลล่า</h5>
                  <p className="card-text">
                  สัญลักษณ์ของสวนสนุกที่โดดเด่นและมีการแสดงโชว์ตระการตาในตอนกลางคืน
                  </p>

                  <img
                    src="https://st3.depositphotos.com/12479068/15686/i/450/depositphotos_156860900-stock-photo-chiba-japan-view-of-tokyo.jpg"
                    alt="Versailles"
                    className="img-fluid rounded"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 d-flex align-items-stretch">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">ขบวนพาเหรดดิสนีย์</h5>
                  <p className="card-text">
                  ชมตัวละครดิสนีย์ที่คุณชื่นชอบออกมาร่วมขบวนพาเหรดพร้อมเสียงเพลงและแสงสี
                  </p>

                  <img
                    src="https://www.japankakkoii.com/wp-content/uploads/2018/12/Tokyo-Disneyland-Christmas-2018-18.jpg"
                    alt="Fushimiinari main"
                    className="img-fluid rounded"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 d-flex align-items-stretch">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Tomorrowland
                  </h5>
                  <p className="card-text">
                  โซนแห่งโลกอนาคตที่มีเครื่องเล่นทันสมัยและธีมภาพยนตร์ดัง เช่น Star Wars และ Buzz Lightyear
                  </p>

                  <img
                    src="https://travel.marumura.com/wp-content/uploads/2022/04/Tokyo-Disneyland-Space-Mountain-1-800x533.png"
                    alt="tomorrowland"
                    className="img-fluid rounded"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Travel Tips */}
        <div className="mb-5">
          <h2 className="text-center mb-4">ข้อแนะนำสำหรับนักท่องเที่ยว</h2>
          <div className="alert alert-info mb-4">
          แนะนำให้จองตั๋วล่วงหน้าเพื่อหลีกเลี่ยงคิวที่ยาวและสามารถวางแผนการเดินทางได้ล่วงหน้า
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-header bg-white">
                  <h5 className="mb-0">การเดินทาง</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                    นั่งรถไฟสาย JR Keiyo หรือ Musashino ไปลงสถานี Maihama ใช้เวลาประมาณ 15 นาทีจากสถานี Tokyo
                    </li>
                    <li className="list-group-item">
                    จากสถานี Maihama สามารถเดินไปยังทางเข้าสวนสนุกได้ใน 5 นาที
                    </li>
                    <li className="list-group-item">
                    มีบริการรถ Shuttle Bus จากโรงแรมในเครือดิสนีย์มายังสวนสนุก
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-header bg-white">
                  <h5 className="mb-0">ช่วงเวลาที่เหมาะสม</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                    วันธรรมดา: เพื่อลดการรอคิวเครื่องเล่นที่ยาวในช่วงวันหยุด
                    </li>
                    <li className="list-group-item">
                    ช่วงเช้า: จะได้มีเวลาเต็มวันในการเที่ยวและสนุกกับเครื่องเล่นต่างๆ
                    </li>
                    <li className="list-group-item">
                    ช่วงเทศกาลฮาโลวีนและคริสต์มาส: บรรยากาศและการตกแต่งสวยงามเพิ่มความพิเศษ
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisneylandDetail;
