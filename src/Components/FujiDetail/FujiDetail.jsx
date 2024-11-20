import React, { useState } from "react";
import "./FujiDetail.css";

const FujiDetail = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // ข้อมูลรูปภาพสำหรับ carousel
  const carouselImages = [
    {
      id: 1,
      src: "https://www.dplusguide.com/wp-content/uploads/2016/11/snow-3252673_1920-1024x682.jpg",
      alt: "Fuji View",
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
            <h1 className="display-4 mb-3">ภูเขาฟูจิ (Fuji)</h1>
            <p className="lead">
              ภูเขาฟูจิเป็นภูเขาไฟที่สูงที่สุดในญี่ปุ่น โดยมีความสูงถึง 3,776
              เมตรจากระดับน้ำทะเล
              ได้รับการยกย่องเป็นมรดกโลกโดยองค์การยูเนสโกในปี ค.ศ. 2013
              ภูเขาฟูจิมีความสำคัญทางวัฒนธรรมและศาสนาอย่างยาวนาน
              เป็นแรงบันดาลใจให้กับศิลปินและนักเขียนมาหลายศตวรรษ
              ฟูจิยังถือเป็นจุดชมวิวที่งดงามและแหล่งท่องเที่ยวที่น่าหลงใหลตลอดปี
              โดยมีฤดูที่เหมาะกับการปีนเขาคือช่วงกรกฎาคมถึงกันยายน
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/080103_hakkai_fuji.jpg"
              alt="fuji Overview"
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
                  <h5 className="card-title">ทะเลสาบคาวากุจิ </h5>
                  <p className="card-text">
                    หนึ่งในทะเลสาบทั้งห้าที่สามารถชมวิวภูเขาไฟฟูจิสะท้อนน้ำได้อย่างชัดเจน
                  </p>

                  <img
                    src="https://resources.matcha-jp.com/resize/480x2000/2019/10/21-88762.webp"
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
                  <h5 className="card-title">เส้นทางปีนเขาฟูจิ</h5>
                  <p className="card-text">
                    มีหลายเส้นทางสำหรับนักปีนเขาทั้งระดับมือใหม่และมืออาชีพ
                    โดยเปิดให้ปีนในช่วงฤดูร้อน
                  </p>

                  <img
                    src="https://www.japanistry.com/wp-content/uploads/2017/09/Mount-Fuji-Descent-v01.jpg"
                    alt="Fuji Climbing Trails"
                    className="img-fluid rounded"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 d-flex align-items-stretch">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">ศาลเจ้าฟูจิซันฮงกูเซ็นเก็น</h5>
                  <p className="card-text">
                    ศาลเจ้าโบราณที่ตั้งอยู่ใกล้ภูเขาฟูจิ
                    และมีทิวทัศน์ภูเขาที่งดงาม
                  </p>

                  <img
                    src="https://movearound-journey.com/wp-content/uploads/2023/01/Fujisan-Hongu-Sengen-Taisha-1.jpg"
                    alt="fujisan hongu"
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
            ควรเช็คสภาพอากาศและการเปิดปิดของเส้นทางก่อนการเดินทางเสมอ
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
                      ขึ้นรถไฟด่วนจากโตเกียวไปยังสถานี Kawaguchiko ใช้เวลาประมาณ
                      2 ชั่วโมง
                    </li>
                    <li className="list-group-item">
                      ใช้บริการรถบัสจากสถานี Shinjuku ไปยังภูเขาไฟฟูจิ
                    </li>
                    <li className="list-group-item">
                      เช่ารถยนต์เพื่อความสะดวกในการสำรวจพื้นที่รอบๆ
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
                      ฤดูใบไม้ผลิ (เม.ย. - พ.ค.):
                      ชมซากุระพร้อมทิวทัศน์ภูเขาไฟฟูจิ
                    </li>
                    <li className="list-group-item">
                      ฤดูร้อน (ก.ค. - ก.ย.): ช่วงเวลาที่เปิดให้ปีนภูเขาไฟฟูจิ
                    </li>
                    <li className="list-group-item">
                      ฤดูใบไม้ร่วง (ต.ค. - พ.ย.): ใบไม้เปลี่ยนสีรอบๆ
                      ภูเขาเพิ่มความงาม
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

export default FujiDetail;
