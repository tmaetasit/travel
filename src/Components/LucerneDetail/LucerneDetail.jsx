import React, { useState } from "react";
import "./LucerneDetail.css";

const LucerneDetail = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // ข้อมูลรูปภาพสำหรับ carousel
  const carouselImages = [
    {
      id: 1,
      src: "https://static.wixstatic.com/media/0a3fc8_08556498c4aa4789969507e348eb0265~mv2_d_3000_2000_s_2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0a3fc8_08556498c4aa4789969507e348eb0265~mv2_d_3000_2000_s_2.jpg",
      alt: "Lucerne View",
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
            <h1 className="display-4 mb-3">เมืองลูเซิร์น (Lucerne)</h1>
            <p className="lead">
              ลูเซิร์นเป็นเมืองเล็กๆที่ตั้งอยู่ริมทะเลสาบลูเซิร์นในเขตเทือกเขาแอลป์โดดเด่นด้วยบรรยากาศอันงดงามและสะพานไม้เก่าแก่
              "Kapellbrücke"เป็นสะพานที่เก่าแก่ที่สุดในยุโรปเมืองนี้เคยเป็นศูนย์กลางการค้าที่สำคัญของสวิตเซอร์แลนด์ในอดีต
              จนถึงวันนี้ก็ยังคงมีเสน่ห์เฉพาะตัวด้วยสถาปัตยกรรมเมืองเก่าที่ถูกอนุรักษ์ไว้อย่างดี
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://www.shutterstock.com/image-photo/sunset-chillon-castle-geneva-lake-600nw-361751813.jpg"
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
                  <h5 className="card-title">Kapellbrücke </h5>
                  <p className="card-text">
                    สะพานไม้เก่าแก่ที่มีภาพวาดประวัติศาสตร์บนหลังคาเป็นจุดเด่นสำคัญของเมือง
                  </p>

                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Kapellbruecke.JPG"
                    alt="Kapellbrücke"
                    className="img-fluid rounded"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 d-flex align-items-stretch">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Lion Monument </h5>
                  <p className="card-text">
                    อนุสาวรีย์รูปสิงโตที่สร้างขึ้นเพื่อรำลึกถึงทหารที่เสียชีวิตมีความหมายลึกซึ้งและสะเทือนใจ
                  </p>

                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/01/Lion_Monument.jpg"
                    alt="Lion Monument"
                    className="img-fluid rounded"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 d-flex align-items-stretch">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Mount Pilatus </h5>
                  <p className="card-text">
                    ภูเขาใกล้เมืองลูเซิร์นขึ้นไปชมวิวพาโนรามาของเทือกเขาและทะเลสาบได้อย่างงดงาม
                  </p>

                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Luzern_-_Mount_Pilatus_-_March_2019_%2801%29.jpg"
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
            ควรสวมรองเท้าที่เดินสบาย
            เพราะลูเซิร์นมีเส้นทางเดินชมเมืองและธรรมชาติหลายจุด
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
                      รถไฟตรงจากซูริคมาถึงลูเซิร์นในเวลาประมาณ 1 ชั่วโมง
                    </li>
                    <li className="list-group-item">
                      เรือโดยสารรอบทะเลสาบลูเซิร์น
                      เพื่อชมวิวเมืองและภูเขารอบข้าง
                    </li>
                    <li className="list-group-item">
                      รถรางหรือกระเช้าขึ้นเขาไปยังยอดเขา Pilatus และ Rigi
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
                      ฤดูใบไม้ผลิ (มี.ค. - พ.ค.) - อากาศสดชื่น
                      เหมาะกับการเดินชมเมือง
                    </li>
                    <li className="list-group-item">
                      ฤดูร้อน (มิ.ย. - ส.ค.) - ทัศนียภาพยอดเขาสวยงาม
                      เหมาะกับกิจกรรมกลางแจ้ง
                    </li>
                    <li className="list-group-item">
                      ฤดูหนาว (ธ.ค. - ก.พ.) -
                      สนุกกับกิจกรรมหิมะและเทศกาลคริสต์มาสที่เต็มไปด้วยบรรยากาศ
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

export default LucerneDetail;
