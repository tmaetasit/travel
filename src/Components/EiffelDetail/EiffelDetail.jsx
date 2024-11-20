import React, { useState } from "react";
import "./EiffelDetail.css";

const EiffelDetail = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // ข้อมูลรูปภาพสำหรับ carousel
  const carouselImages = [
    {
      id: 1,
      src: "https://i0.wp.com/www.castleinterprogram.com/wp-content/uploads/2022/10/Effiel-Tower-Reflection-Pool-scaled.jpg?fit=1024%2C682&ssl=1",
      alt: "Eiffel View",
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
            <h1 className="display-4 mb-3">หอคอยไอเฟล (Eiffel Tower)</h1>
            <p className="lead">
            หอไอเฟลเป็นสัญลักษณ์ของเมืองปารีสและฝรั่งเศส สร้างขึ้นในปี 1889 สำหรับงาน World’s Fair และปัจจุบันเป็นหนึ่งในสถานที่ท่องเที่ยวที่ได้รับความนิยมที่สุดในโลกสามารถขึ้นไปชมวิวที่สวยงามของเมืองจากชั้นบนสุดได้ หอคอยนี้กลายเป็นสัญลักษณ์ของความโรแมนติกและเป็นที่รักของผู้คนทั่วโลก
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/paris-skyline-with-eiffel-tower-on-a-sunny-day-wide-royalty-free-image-1722542669.jpg?crop=0.88931xw:1xh;center,top&resize=1200:*"
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
                  <h5 className="card-title">Eiffel Tower </h5>
                  <p className="card-text">
                  สัญลักษณ์สำคัญของปารีสที่สามารถขึ้นไปชมวิวเมืองได้จากทุกระดับของหอ
                  </p>

                  <img
                    src="https://th-thumbnailer.cdn-si-edu.com/S8L2tWX_zuxQQQXIVEK4EMGYCGo=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/db/d6/dbd616d4-f52c-43cb-a9c2-4f77a5dcb2d3/eiffel-tower-night.jpg"
                    alt="Eiffel Tower"
                    className="img-fluid rounded"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 d-flex align-items-stretch">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Louvre Museum </h5>
                  <p className="card-text">
                  พิพิธภัณฑ์ที่มีชื่อเสียงระดับโลก โดยมีงานศิลปะที่สำคัญ เช่น "โมนาลิซา"
                  </p>

                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-s/16/aa/20/d1/the-louvre-originally.jpg"
                    alt="Louvre Museum"
                    className="img-fluid rounded"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 d-flex align-items-stretch">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Trocadéro Square</h5>
                  <p className="card-text">
                  จุดชมวิวที่สวยที่สุดในการมองหอไอเฟล พร้อมสวนสาธารณะและสระน้ำขนาดใหญ่
                  </p>

                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrI7qcE1ITnkxm6wmwbC0aj-A71v-W90svqevlVTSD-tnPsEyRo8Tg6oP0T1k-m0L7TzU&usqp=CAU"
                    alt="Trocadéro Square"
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
          ควรซื้อตั๋วล่วงหน้าเพื่อหลีกเลี่ยงการรอคิวยาวที่หอไอเฟล
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
                    เดินทางโดยรถไฟใต้ดินสาย 6 และลงที่สถานี Bir-Hakeim
                    </li>
                    <li className="list-group-item">
                    ใช้บริการรถบัสสาย 82 และ 42 ซึ่งจอดใกล้หอไอเฟล
                    </li>
                    <li className="list-group-item">
                    สามารถเดินจากจุดที่ใกล้ที่สุดอย่าง Champ de Mars ได้
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
                    ฤดูใบไม้ผลิ (มี.ค. - พ.ค.): อากาศดีและไม่แออัด
                    </li>
                    <li className="list-group-item">
                    ฤดูร้อน (มิ.ย. - ส.ค.): อากาศอบอุ่น แต่ค่อนข้างมีนักท่องเที่ยวเยอะ
                    </li>
                    <li className="list-group-item">
                    ฤดูใบไม้ร่วง (ก.ย. - พ.ย.): อากาศเย็นสบายและมีการลดราคาสำหรับการท่องเที่ยว
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

export default EiffelDetail;
