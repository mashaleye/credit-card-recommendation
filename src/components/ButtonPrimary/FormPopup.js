import React, { useState } from "react";

function FormPopup() {
  const [age, setAge] = useState("");
  const [rewardTypes, setRewardTypes] = useState("");
  const [annualFees, setAnnualFees] = useState("");
  const [creditScoreRequirement, setCreditScoreRequirement] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Age:", age);
    console.log("Reward Types:", rewardTypes);
    console.log("Annual Fees:", annualFees);
    console.log("Credit Score Requirement:", creditScoreRequirement);
    // Close the popup
    setIsOpen(false);
  };

  return isOpen ? (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1000",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "left", fontFamily: "Roboto", fontSize: "24px" }}>
          <h2>Welcome to the Credit Card Finder</h2>
        </div>
        
        <div style={{ display: "flex", alignItems: "center", fontFamily: "Roboto", fontSize: "18px" }}>
          <div style={{ fontSize: "24px", marginRight: "20px" }}>
            <p>Find your ideal credit card here</p>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <img
              src="https://s3-alpha.figma.com/hub/file/2055541380/fa3f0d3f-4a3e-41f8-93ce-f3a74a45f353-cover.png"
              alt="Credit Card"
              style={{ maxWidth: "200px" }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "18px" }}>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "18px" }}>Reward Types:</label>
            <input
              type="text"
              value={rewardTypes}
              onChange={(e) => setRewardTypes(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "18px" }}>Annual Fees:</label>
            <input
              type="number"
              value={annualFees}
              onChange={(e) => setAnnualFees(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "18px" }}>Credit Score Requirement:</label>
            <input
              type="number"
              value={creditScoreRequirement}
              onChange={(e) => setCreditScoreRequirement(e.target.value)}
              required
            />
          </div>
          <button type="submit" style={{ fontSize: "18px" }}>Submit</button>
        </form>
      </div>
    </div>
  ) : null;
}

export default FormPopup;

