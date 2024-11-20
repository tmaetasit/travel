import React, { useState, useEffect } from "react";
import "./LakeGenevaDetail.css";

const LakeGenevaDetail = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // ข้อมูลรูปภาพสำหรับ carousel
  const carouselImages = [
    {
      id: 1,
      src: "https://c4.wallpaperflare.com/wallpaper/302/564/26/5bd3a86d59cc2-wallpaper-preview.jpg",
      alt: "Lake Geneva View",
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
            <h1 className="display-4 mb-3">ทะเลสาบเจนีวา (LakeGeneva)</h1>
            <p className="lead">
              ทะเลสาบเจนีวาคืออัญมณีแห่งยุโรปตอนกลาง!
              ตั้งอยู่ระหว่างสวิตเซอร์แลนด์และฝรั่งเศส
              ทะเลสาบรูปพระจันทร์เสี้ยวนี้รายล้อมด้วยเมืองที่เต็มไปด้วยเสน่ห์
              อย่างเจนีวา โลซานน์ และมงเทรอซ์ ตั้งแต่ยุคโบราณ
              ที่นี่เป็นเส้นทางการค้าที่สำคัญจนกลายเป็นเมืองที่มีความหลากหลายทางวัฒนธรรม
              และความหรูหราของธรรมชาติผสานกับประวัติศาสตร์อันยาวนาน
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
                  <h5 className="card-title">Château de Chillon </h5>
                  <p className="card-text">
                    ปราสาทเก่าแก่ที่ตั้งอยู่บนเกาะเล็กๆ
                    ริมทะเลสาบเจนีวาเต็มไปด้วยประวัติศาสตร์และวิวที่น่าทึ่ง
                  </p>

                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/001_Chateau_de_Chillon_and_Dents_du_Midi_Photo_by_Giles_Laurent.jpg/1200px-001_Chateau_de_Chillon_and_Dents_du_Midi_Photo_by_Giles_Laurent.jpg"
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
                  <h5 className="card-title">Montreux Promenade </h5>
                  <p className="card-text">
                    เส้นทางเดินเลียบทะเลสาบที่สวยงาม แวดล้อมด้วยดอกไม้และภูเขา
                  </p>

                  <img
                    src="https://img.freepik.com/premium-photo/montreux-switzerland-august-27-2016-people-walking-promenade-geneva-lake-montreux-vaud-canton-switzerland_250132-19943.jpg"
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
                  <h5 className="card-title">Geneva Water Fountain </h5>
                  <p className="card-text">
                    น้ำพุที่สูงถึง 140
                    เมตรเห็นได้ชัดจากระยะไกลและเพิ่มความมีชีวิตชีวาให้กับทะเลสาบ
                  </p>

                  <img
                    src="https://grandlanetransfer.com/upload/news/rn0jfy89_s.jpg"
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
            ควรเตรียมเสื้อผ้าให้เหมาะกับสภาพอากาศที่เปลี่ยนแปลงในแต่ละฤดู
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
                      สามารถเดินทางโดยรถไฟจากเมืองเจนีวาหรือโลซานน์ได้อย่างสะดวก
                    </li>
                    <li className="list-group-item">
                      มีบริการเรือข้ามฟากและล่องเรือรอบทะเลสาบหลายจุด
                    </li>
                    <li className="list-group-item">
                      รถบัสให้บริการตามแนวชายฝั่ง
                      ทำให้เดินทางระหว่างเมืองได้ง่าย
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
                      ฤดูร้อน (มิ.ย. - ส.ค.) -
                      เหมาะสำหรับการเดินเล่นริมทะเลสาบและงานเทศกาลดนตรีแจ๊สที่มงเทรอซ์
                    </li>
                    <li className="list-group-item">
                      ฤดูใบไม้ร่วง (ก.ย. - ต.ค.) - ชมวิวใบไม้เปลี่ยนสีรอบทะเลสาบ
                    </li>
                    <li className="list-group-item">
                      ฤดูหนาว (ธ.ค. - ก.พ.) -
                      เหมาะสำหรับการเล่นสกีและกิจกรรมฤดูหนาวในเทือกเขาแอลป์
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

export default LakeGenevaDetail;
