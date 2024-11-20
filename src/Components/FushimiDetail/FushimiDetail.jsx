import React, { useState } from "react";
import "./FushimiDetail.css";

const FushimiDetail = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // ข้อมูลรูปภาพสำหรับ carousel
  const carouselImages = [
    {
      id: 1,
      src: "https://ik.imagekit.io/tvlk/blog/2024/04/jNuXVThQ-image4-1024x569.png?tr=dpr-2,w-675",
      alt: "Fushimiinari View",
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
            <h1 className="display-4 mb-3">ศาลเจ้าฟุชิมิอินาริ</h1>
            <p className="lead">
              ศาลเจ้าฟูชิมิอินาริในเมืองเกียวโตเป็นศาลเจ้าชินโตที่มีชื่อเสียงมากที่สุดแห่งหนึ่งในญี่ปุ่นสร้างขึ้นตั้งแต่ศตวรรษที่
              8 เพื่ออุทิศแด่เทพอินาริเทพเจ้าแห่งความเจริญรุ่งเรืองการเกษตร
              และความสำเร็จเสน่ห์ของศาลเจ้าแห่งนี้คือเส้นทาง “โทริอิ”
              หรือประตูสีแดงนับหมื่นซุ้มที่ทอดยาวขึ้นไปยังยอดเขาอินาริ
              การเดินผ่านโทริอิเปรียบเหมือนการเดินเข้าไปในมิติแห่งศรัทธาและความศักดิ์สิทธิ์
              นอกจากนั้นยังมีรูปปั้นสุนัขจิ้งจอกซึ่งเป็นผู้รับใช้เทพอินาริ
              ให้เห็นตลอดทาง
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://www.miabid.com/images/portfolio/japan-kyoto-fushimi-inari-shrine-night-1024.jpg"
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
                  <h5 className="card-title">เสาโทริอิ</h5>
                  <p className="card-text">
                  อุโมงค์ของเสาโทริอิสีแดงนับพันต้นที่ทอดยาวไปตามเส้นทางภูเขา สร้างบรรยากาศลึกลับและศักดิ์สิทธิ์
                  </p>

                  <img
                    src="https://www.jubileetravel.co.th//wp-content/uploads/2021/06/%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%9F%E0%B8%B9%E0%B8%8A%E0%B8%B4%E0%B8%A1%E0%B8%B4%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%B2%E0%B8%A3%E0%B8%B4-%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B9%82%E0%B8%95-%E0%B8%97%E0%B8%B1%E0%B8%A7%E0%B8%A3%E0%B9%8C%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B9%82%E0%B8%95-jubileetravel-16-1.jpg.webp"
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
                  <h5 className="card-title">ศาลเจ้าหลัก</h5>
                  <p className="card-text">
                  ตั้งอยู่บริเวณเชิงเขา ถือเป็นจุดเริ่มต้นของเส้นทางและเป็นศูนย์กลางในการบูชาเทพอินาริ
                  </p>

                  <img
                    src="https://ik.imagekit.io/tvlk/blog/2024/04/image2-1024x600.png?tr=dpr-2,w-675"
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
                  <h5 className="card-title">เส้นทางขึ้นภูเขาอินาริ</h5>
                  <p className="card-text">
                  เส้นทางเดินป่าที่นำคุณผ่านบรรยากาศธรรมชาติและวิวเมืองเกียวโตเมื่อขึ้นไปถึงยอดเขา
                  </p>

                  <img
                    src="https://omakase-tour.com/tours/images/Kifune%20Jinja%20Hongu.jpg"
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
          ควรมาถึงเช้าหรือเย็นเพื่อหลีกเลี่ยงนักท่องเที่ยวจำนวนมากและสัมผัสความสงบของสถานที่
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
                    นั่งรถไฟจากสถานี Kyoto มายังสถานี Inari โดยใช้เวลาเพียง 5 นาที
                    </li>
                    <li className="list-group-item">
                    เดินจากสถานี Inari ไปยังศาลเจ้าซึ่งอยู่ห่างเพียงไม่กี่นาที
                    </li>
                    <li className="list-group-item">
                    ใช้รถประจำทางจากสถานี Kyoto มาลงใกล้สถานี Inari สำหรับผู้ที่ต้องการชมวิวรอบๆ ระหว่างทาง
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
                      เช้าตรู่: เพื่อหลีกเลี่ยงนักท่องเที่ยวและเพลิดเพลินกับบรรยากาศที่เงียบสงบ
                    </li>
                    <li className="list-group-item">
                    ช่วงบ่าย: หากต้องการแสงแดดที่ส่องผ่านเสาโทริอิสร้างบรรยากาศสวยงาม
                    </li>
                    <li className="list-group-item">
                    ช่วงเย็น: บรรยากาศยามค่ำเพิ่มความลึกลับและสวยงาม
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

export default FushimiDetail;
