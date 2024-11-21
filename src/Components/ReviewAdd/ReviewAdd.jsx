import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ReviewAdd.css";
import axios from "axios";

const ReviewAdd = () => {
  const [reviewText, setReviewText] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locations, setLocations] = useState([]);
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const countryLocations = {
    Switzerland: ["Jungfrau", "Lake Geneva", "Lucerne"],
    France: ["Eiffel Tower", "Versailles", "French Riviera"],
    Japan: ["Fuji", "Fushimi Inari", "Tokyo Disneyland"],
  };

  const handleCountryChange = (e) => {
    const selected = e.target.value;
    setSelectedCountry(selected);
    setLocations(countryLocations[selected] || []);
    setSelectedLocation(""); // รีเซ็ตสถานที่
  };

  const handleRating = (index) => {
    setRating(index + 1);
  };

  const handleSaveDraft = () => {
    const draft = {
      selectedCountry,
      selectedLocation,
      rating,
      reviewText,
    };
    localStorage.setItem("reviewDraft", JSON.stringify(draft));
    alert("Draft saved successfully!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!selectedCountry || !selectedLocation || !rating || !reviewText) {
      setErrorMessage("Please complete all fields before submitting.");
      return;
    }

    const reviewData = {
      country: selectedCountry,
      location: selectedLocation,
      rating,
      reviewText,
    };

    try {
      const response = await axios.post("http://localhost:7001/reviews/add", reviewData);
      if (response.status === 200) {
        alert("Review submitted successfully!");
        navigate("/");
      }
    } catch (error) {
      setErrorMessage("Failed to submit the review. Please try again.");
    }
  };

  return (
    <div className="container mt-5 pt-5" style={{ maxWidth: "900px" }}>
      <h3 className="text-center mb-4">Add / Edit Review</h3>
      <div className="border p-4 rounded">
        <form onSubmit={handleSubmit}>
          {/* Country Dropdown */}
          <div className="form-group mb-3">
            <label htmlFor="country" className="form-label">Country</label>
            <select
              id="country"
              className="form-control"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">Select a Country</option>
              {Object.keys(countryLocations).map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* Location Dropdown */}
          {selectedCountry && (
            <div className="form-group mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <select
                id="location"
                className="form-control"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">Select a Location</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Rating Stars */}
          <div className="form-group mb-3">
            <label className="form-label">Rating</label>
            <div className="star-rating">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`star ${rating > index ? "text-warning" : "text-muted"}`}
                  onClick={() => handleRating(index)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>

          {/* Review Text Area */}
          <div className="form-group mb-3">
            <label htmlFor="reviewText" className="form-label">Review</label>
            <textarea
              id="reviewText"
              className="form-control"
              rows="4"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here..."
            ></textarea>
          </div>

          {/* Error Message */}
          {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary d-block w-100 mb-3">
            Submit Review
          </button>

          {/* Additional Buttons */}
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-secondary w-48"
              type="button"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button
              className="btn btn-success w-48"
              type="button"
              onClick={handleSaveDraft}
            >
              Save Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewAdd;
