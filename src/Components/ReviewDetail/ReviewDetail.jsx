import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ReviewDetail.css";
import axios from "axios";

const ReviewDetail = () => {
  const [showConfirm, setShowConfirm] = useState(false); // สำหรับเปิด/ปิด Modal
  const navigate = useNavigate();

  const userName = "User Name"; // ชื่อผู้ใช้งาน
  const reviewDate = "2024-11-14"; // วันที่เขียนรีวิว
  const reviewText =
    "This is the review content. It's amazing and worth visiting!"; // คำอธิบายรีวิว
  const reviewId = "12345"; // ไอดีของรีวิว (เปลี่ยนตามจริง)

  const handleDelete = async () => {
    try {
      // ลบรีวิวผ่าน API
      const response = await axios.delete(
        `http://localhost:7001/reviews/${reviewId}`
      );
      if (response.status === 200) {
        alert("Review deleted successfully");
        navigate("/"); // กลับไปหน้าหลัก
      }
    } catch (error) {
      alert("Failed to delete the review. Please try again.");
    }
  };

  return (
    <div className="container mt-5 px-5">
      <div className="row">
        {/* ซ้าย: ข้อมูลรีวิว */}
        <div className="col-md-8 mt-5">
          <div className="review-header mb-4">
            <h3>{userName}</h3>
            <div className="star-rating">
              {/* แสดงดาว 5 ดวง */}
              {[...Array(5)].map((_, index) => (
                <i key={index} className="fas fa-star"></i>
              ))}
            </div>
            <p className="review-date">{reviewDate}</p>
          </div>
          <div className="review-text">
            <div className="border p-3">
              <p>{reviewText}</p>
            </div>
          </div>
        </div>

        {/* ขวา: ปุ่ม Delete, Edit และ Write Review */}
        <div className="col-md-4 mt-5">
          <div className="review-actions">
            {/* ปุ่ม Delete */}
            <button
              className="btn btn-danger d-block w-100 mb-2"
              onClick={() => setShowConfirm(true)}
            >
              Delete
            </button>
            {/* ปุ่ม Edit */}
            <Link to="/reviewadd" className="btn btn-warning d-block w-100 mb-2">
              Edit
            </Link>
            {/* ปุ่ม Write Review */}
            <Link to="/reviewadd" className="btn btn-success d-block w-100">
              Write Review
            </Link>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="modal" style={{ display: "block", background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowConfirm(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this review?</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowConfirm(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewDetail;
