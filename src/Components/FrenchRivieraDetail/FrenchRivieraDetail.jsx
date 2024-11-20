import React, { useState } from "react";
import "./FrenchRivieraDetail.css";

const FrenchRivieraDetail = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // ข้อมูลรูปภาพสำหรับ carousel
  const carouselImages = [
    {
      id: 1,
      src: "https://travelfrancebucketlist.com/wp-content/uploads/2019/06/Menton-French-Riviera-1024x683.jpg",
      alt: "French Riviera View",
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
            <h1 className="display-4 mb-3">(French Riviera)</h1>
            <p className="lead">
              ริเวียร่าฝรั่งเศส หรือที่รู้จักกันในชื่อ Côte d'Azur
              เป็นชายฝั่งทะเลเมดิเตอร์เรเนียนที่โด่งดังในฝรั่งเศส
              มีชื่อเสียงในฐานะสถานที่พักผ่อนของเหล่าชนชั้นสูงและศิลปิน
              ตั้งแต่ศตวรรษที่ 19
              ชายฝั่งแห่งนี้เป็นที่โปรดของเหล่าชนชั้นสูงในยุโรป มีสถานที่ยอดนิยม
              เช่น นีซ คานส์ มอนติคาร์โล และแซงต์โตรเปซ์
              โดยในปัจจุบันยังคงรักษาเสน่ห์แบบดั้งเดิม
              ผสมผสานกับบรรยากาศโมเดิร์นที่เต็มไปด้วยสีสันและชีวิตชีวา{" "}
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://media.istockphoto.com/id/1248448159/fr/photo/villefranche-sur-mer-village-in-france.jpg?s=612x612&w=0&k=20&c=1efCuW9JAlQm11CthKCArfFJtCycCm33vzzqWpCx2nI="
              alt="french riviera Overview"
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
                  <h5 className="card-title">นีซ (Nice) </h5>
                  <p className="card-text">
                    เมืองชายทะเลที่มีชายหาดสวยงามและถนนสาย promenade
                    ที่มีชื่อเสียง
                  </p>

                  <img
                    src="https://www.lumahealth.com/wp-content/uploads/2023/06/39ebad1101-1.jpg"
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
                  <h5 className="card-title">แคนส์ (Cannes)</h5>
                  <p className="card-text">
                    เมืองที่มีชื่อเสียงจากเทศกาลภาพยนตร์นานาชาติ
                    และชายหาดที่สวยงาม
                  </p>

                  <img
                    src="https://aspiretraveladvisors.com/wp-content/uploads/2023/06/French_Riviera-1-1024x682.jpg"
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
                  <h5 className="card-title">มอนติคาร์โล (Monaco)</h5>
                  <p className="card-text">
                    เมืองมหาเศรษฐีกับสุดยอดสถานที่หรูหรากับคาสิโนที่มีชื่อเสียงและวิวทะเลที่ตระการตา
                  </p>

                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/ba/72/68/monte-carlo-harbor.jpg?w=1200&h=1200&s=1"
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
            อย่าลืมเดินเล่นตามชายหาดและถนนหลักเพื่อสัมผัสบรรยากาศท้องถิ่นที่เป็นเอกลักษณ์
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
                      ขึ้นรถไฟ TGV จากปารีสไปยัง Nice ใช้เวลาประมาณ 5 ชั่วโมง
                    </li>
                    <li className="list-group-item">
                      ใช้บริการรถบัสระหว่างเมืองใน French Riviera
                    </li>
                    <li className="list-group-item">
                      เช่ารถยนต์ขับเพื่อเดินทางท่องเที่ยวตามชายฝั่งทะเล
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
                      ฤดูใบไม้ผลิ (มี.ค. - พ.ค.):
                      อากาศอุ่นสบายและนักท่องเที่ยวน้อย
                    </li>
                    <li className="list-group-item">
                      ฤดูร้อน (มิ.ย. - ส.ค.): ช่วงที่มีความคึกคักที่สุด
                      แต่จะพบกับกิจกรรมมากมาย
                    </li>
                    <li className="list-group-item">
                      ฤดูใบไม้ร่วง (ก.ย. - พ.ย.):
                      อากาศดีและราคาไม่สูงเหมือนฤดูร้อน
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

export default FrenchRivieraDetail;
