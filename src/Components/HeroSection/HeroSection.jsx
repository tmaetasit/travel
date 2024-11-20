import React from "react";
import "./HeroSection.css";
import { Carousel } from "react-bootstrap";

function HeroSection() {
  return (
    <div className="hero-section">
      <Carousel>
        <Carousel.Item className="carousel-item1 vh-100">
          <Carousel.Caption className="h-100 d-flex flex-column align-items-center justify-content-top">
            <div className="row h-100">
              <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                <h1 className="text-capitalize text-start">Switzerland</h1>
                <p className="text-start">
                สวิตเซอร์แลนด์เป็นดินแดนแห่งธรรมชาติที่งดงามราวกับภาพวาด โอบล้อมด้วยภูเขาแอลป์ที่ยิ่งใหญ่ ทะเลสาบใสราวกับคริสตัล และหมู่บ้านสวยงามเสมือนหลุดออกจากเทพนิยาย นักท่องเที่ยวสามารถสัมผัสกับความงามของยอดเขาจุงเฟรา ความสงบของทะเลสาบเจนีวา และเสน่ห์ของเมืองลูเซิร์น หากคุณกำลังมองหาประสบการณ์การเดินทางที่ผ่อนคลายและเต็มไปด้วยทิวทัศน์ที่น่าทึ่ง สวิตเซอร์แลนด์คือจุดหมายที่ไม่ควรพลาด
                </p>
              </div>
              <div className="col-lg-6 d-none d-lg-block"></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item2 vh-100">
          <Carousel.Caption className="h-100">
            <div className="row h-100">
              <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                <h1 className="text-capitalize text-start">France</h1>
                <p className="text-start">
                ฝรั่งเศสเป็นจุดหมายปลายทางที่เต็มไปด้วยประวัติศาสตร์และความโรแมนติกที่คุณไม่ควรพลาด! สัมผัส หอไอเฟล แลนด์มาร์กชื่อดังของโลกที่กรุงปารีส, สำรวจความวิจิตรของ พระราชวังแวร์ซาย ที่สะท้อนความหรูหราสมัยยุคกษัตริย์ และพักผ่อนริม ชายฝั่งเฟรนช์ริเวียร่า ที่เต็มไปด้วยสีสันแห่งท้องทะเลเมดิเตอร์เรเนียนอันงดงาม
                </p>
              </div>
              <div className="col-lg-6 d-none d-lg-block"></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item3 vh-100">
          <Carousel.Caption className="h-100">
            <div className="col-lg-6 d-none d-lg-block"></div>
            <div className="row h-100">
              <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                <h1 className="text-capitalize text-start">Japan</h1>
                <p className="text-start">
                ญี่ปุ่นเป็นจุดหมายปลายทางที่รวมความงามธรรมชาติและวัฒนธรรมที่หลากหลาย! ชมความงามของ ภูเขาฟูจิ ที่มีชื่อเสียง, สัมผัสความศักดิ์สิทธิ์ที่ ศาลเจ้า Fushimi Inari ซึ่งเป็นแหล่งท่องเที่ยวที่มีประวัติศาสตร์ยาวนาน, และสนุกไปกับความบันเทิงที่ โตเกียวดิสนีย์แลนด์ ที่เต็มไปด้วยมนต์เสน่ห์สำหรับทุกวัย
                </p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSection;
