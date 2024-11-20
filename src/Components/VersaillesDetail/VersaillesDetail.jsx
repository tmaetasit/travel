import React, { useState } from "react";
import "./VersaillesDetail.css";

const VersaillesDetail = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // ข้อมูลรูปภาพสำหรับ carousel
  const carouselImages = [
    {
      id: 1,
      src: "https://www.historyhit.com/app/uploads/bis-images/5183064/Gardens-of-Versailles--788x537.jpg?x45875",
      alt: "Versailles View",
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
            <h1 className="display-4 mb-3">พรระราชวังแวร์ซาย(Versailles)</h1>
            <p className="lead">
            เป็นหนึ่งในพระราชวังที่สวยงามและยิ่งใหญ่ที่สุดในโลก ตั้งอยู่ห่างจากกรุงปารีสเพียง 20 กิโลเมตร เป็นที่ตั้งของสวนที่มีชื่อเสียงและเป็นสถานที่ประทับของพระมหากษัตริย์ฝรั่งเศสในช่วงศตวรรษที่ 17 และ 18
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://static.wixstatic.com/media/de5a6d_bb8019a90c3e47cdaa4ea342a5b00ba3~mv2.webp/v1/fit/w_2500,h_1330,al_c/de5a6d_bb8019a90c3e47cdaa4ea342a5b00ba3~mv2.webp"
              alt="Lake geneva Overview"
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
                  <h5 className="card-title">พระราชวังแวร์ซายส์ (Palace of Versailles) </h5>
                  <p className="card-text">
                  พระราชวังที่หรูหราและมีชื่อเสียงในเรื่องของสถาปัตยกรรมและประวัติศาสตร์การเมืองฝรั่งเศส
                  </p>

                  <img
                    src="https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/shutterstock_2264734615_ss_non-editorial_rfwvea?_a=BAVARSDW0"
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
                  <h5 className="card-title">สวนแวร์ซายส์ (Gardens of Versailles)</h5>
                  <p className="card-text">
                  สวนกว้างขวางที่มีการออกแบบอย่างวิจิตร ร่มรื่นด้วยน้ำพุและรูปปั้นที่สวยงาม
                  </p>

                  <img
                    src="https://twoinfrance.com/wp-content/uploads/2022/12/versailles-_gardens.webp"
                    alt="Garden of Versailles"
                    className="img-fluid rounded"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 d-flex align-items-stretch">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">ห้องกระจก (Hall of Mirrors)</h5>
                  <p className="card-text">
                  ห้องที่มีความโดดเด่นด้วยกระจกขนาดใหญ่ที่สะท้อนแสงทำให้ห้องนี้ดูหรูหรา
                  </p>

                  <img
                    src="https://live.staticflickr.com/8496/8389024061_aa282463a2_b.jpg"
                    alt="Hall of Mirrors"
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
          แนะนำให้มาถึงแต่เช้าเพื่อหลีกเลี่ยงฝูงชนและมีเวลาสำรวจพระราชวังและสวนอย่างเต็มที่
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
                    สามารถเดินทางโดยรถไฟ RER C จากสถานี Paris ไปยังสถานี Versailles Château - Rive Gauche
                    </li>
                    <li className="list-group-item">
                    ใช้บริการรถบัสสาย 171 จากสถานี Pont de Sèvres
                    </li>
                    <li className="list-group-item">
                    ขับรถจากกรุงปารีสใช้เวลาประมาณ 30 นาที
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
                    ฤดูใบไม้ผลิ (มี.ค. - พ.ค.): อากาศสดชื่นและเหมาะแก่การเดินชมสวน
                    </li>
                    <li className="list-group-item">
                    ฤดูร้อน (มิ.ย. - ส.ค.): เป็นช่วงเวลาที่มีนักท่องเที่ยวเยอะ แต่เหมาะสำหรับการชมพระราชวัง
                    </li>
                    <li className="list-group-item">
                    ฤดูใบไม้ร่วง (ก.ย. - พ.ย.): อากาศเย็นสบายและสวนมีสีสันจากใบไม้ที่เปลี่ยนสี
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

export default VersaillesDetail;
