import React, { useState, useEffect } from "react";
import "./JungFrauDetail.css";

const JungFrauDetail = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // ข้อมูลรูปภาพสำหรับ carousel
  const carouselImages = [
    {
      id: 1,
      src: "https://media.jungfrau.ch/image/upload/ar_16:9,c_crop,fl_lossy,q_auto/c_scale,w_3190/v1548413476/fileadmin/Jungfraujoch_Top_of_Europe/Jungfraujoch-Sphinx-Gletscher.jpg",
      alt: "Jungfrau Mountain View",
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
            <h1 className="display-4 mb-3">จุงเฟรา (Jungfrau)</h1>
            <p className="lead">
              สัมผัสความงามและความท้าทายของยอดเขาจุงเฟรา
              หนึ่งในจุดหมายปลายทางที่โดดเด่นที่สุดในสวิตเซอร์แลนด์ ด้วยความสูง
              4,158 เมตรเหนือระดับน้ำทะเล จุงเฟราได้รับการขนานนามว่าเป็น "Top of
              Europe"
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://www.vacationistmag.com/wp-content/uploads/2019/08/jungfrau-aletschgletscher-jungfraujoch-top-of-europe-02.jpg"
              alt="Jungfrau Overview"
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
                  <h5 className="card-title">Jungfrau</h5>
                  <p className="card-text">
                    สถานีรถไฟที่สูงที่สุดในยุโรปพร้อมวิวที่สวยงาม
                  </p>
                  {/* เพิ่มรูปขนาดเล็กใต้ Jungfraujoch */}
                  <img
                    src="https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_183377/20240630151632_i7RZQ/jpg"
                    alt="Jungfraujoch Small"
                    className="img-fluid rounded"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 d-flex align-items-stretch">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Ice Palace</h5>
                  <p className="card-text">
                    พิพิธภัณฑ์น้ำแข็งที่แกะสลักอย่างวิจิตรงดงาม
                  </p>
                  {/* เพิ่มรูปขนาดเล็กใต้ Ice Palace */}
                  <img
                    src="https://thumbs.dreamstime.com/b/sep-jungfraujoch-switzerland-jungfrau-ice-palace-ice-cave-deep-under-jungfrau-peak-tourists-walking-inside-jungfrau-ice-134513430.jpg"
                    alt="Ice Palace Small"
                    className="img-fluid rounded"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 d-flex align-items-stretch">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Sphinx Observatory</h5>
                  <p className="card-text">
                    หอดูดาวที่มอบวิวแบบ 360 ของเทือกเขาแอลป์
                  </p>
                  {/* เพิ่มรูปขนาดเล็กใต้ Sphinx Observatory */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Sphinx_Observatorium.jpg"
                    alt="Sphinx Observatory Small"
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
            ควรเช็คสภาพอากาศก่อนเดินทาง และเตรียมเสื้อผ้าให้เหมาะสม
            เนื่องจากอุณหภูมิบนยอดเขาอาจต่ำกว่า 0 องศาเซลเซียส
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
                      เดินทางโดยรถไฟจาก Interlaken
                    </li>
                    <li className="list-group-item">
                      ใช้เวลาประมาณ 2 ชั่วโมงถึงยอดเขา
                    </li>
                    <li className="list-group-item">
                      ควรจองตั๋วล่วงหน้าในช่วง High Season
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
                    <li className="list-group-item">เปิดให้เข้าชมตลอดทั้งปี</li>
                    <li className="list-group-item">
                      ฤดูร้อน (มิ.ย. - ส.ค.) อากาศดีที่สุด
                    </li>
                    <li className="list-group-item">
                      ฤดูหนาว (ธ.ค. - ก.พ.) เหมาะสำหรับกิจกรรมสกี
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

export default JungFrauDetail;
