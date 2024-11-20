import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselImages = [
    {
      id: 1,
      src: "https://wpuat-tcism.utcc.ac.th/wp-content/uploads/2024/06/UTCC-2-scaled-1.jpg",
      alt: "Utcc View",
    },
  ];

  return (
    <div className="pb-5">
      {/* Hero Carousel */}
      <div className="carousel slide position-relative carousel-max-height">
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
                className="d-block w-100 carousel-img"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-5">
        {/* Introduction Section */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 mb-3">About Project</h1>
            <p className="lead">
              "ยินดีต้อนรับสู่เว็บไซต์แนะนำสถานที่ท่องเที่ยวที่ถูกพัฒนาขึ้นเพื่อให้ผู้ใช้งานได้รับแรงบันดาลใจสำหรับการเดินทางได้อย่างสะดวกสบาย
              เราใช้เทคโนโลยี React
              ในการพัฒนาเว็บแอปพลิเคชันที่ทันสมัยและรวดเร็ว
              พร้อมผสมผสานการออกแบบด้วย Bootstrap
              ให้ดูสวยงามและตอบโจทย์การใช้งานในทุกอุปกรณ์
              เพลิดเพลินไปกับข้อมูลที่ครบถ้วน ทั้งไฮไลท์การท่องเที่ยว
              แนะนำการเดินทาง และข้อมูลที่เป็นประโยชน์ที่เราได้คัดสรรมาเพื่อคุณ"
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://i.ytimg.com/vi/pgB9x917ngE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLANH1tayNcZIo4Ddedd_3Ij39BD0w"
              alt="react bootstrap"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <hr />

        {/* About Us Section */}
        <div className="text-center mt-5">
          <h2 className="mb-4">About Us</h2>
          <div className="row">
            {/* Profile Cards */}
            <div className="col-lg-4 offset-lg-2 col-md-6 mb-4 d-flex justify-content-center">
              <div className="card shadow p-4 profile-card">
                <img
                  src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                  alt="Profile 1"
                  className="profile-img rounded-circle mx-auto d-block mb-3"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Maetasit Pittatanang</h5>
                  <p className="card-text">Intern Frontend Developer</p>
                  <p className="card-text">Thai Chamber Of Commerce University</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
              <div className="card shadow p-4 profile-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKQ1jMpkVyTXLYmWjBMWqVn8qYFoKfQuhyPrB9qde5k2R0RrLjtwF2V1PeqGWrIuhXMI&usqp=CAU"
                  alt="Profile 2"
                  className="profile-img rounded-circle mx-auto d-block mb-3"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Aurasaya Thiangtud</h5>
                  <p className="card-text">Intern Backend Developer</p>
                  <p className="card-text">Thai Chamber Of Commerce University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
