import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />

      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
          }

          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #a8e6cf;
            color: #333;
          }

          .home-container {
            text-align: center;
            padding: 40px;
            width: 90%;
            max-width: 800px;
            background: white;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
            border-radius: 15px;
          }

          .home-heading {
            font-size: 28px;
            color: #2c3e50;
            font-weight: bold;
            margin-bottom: 15px;
          }

          .home-description {
            font-size: 18px;
            color: #555;
            margin-bottom: 20px;
            line-height: 1.6;
          }

          .home-services {
            font-size: 22px;
            color: #27ae60;
            font-weight: bold;
            margin-top: 20px;
          }

          .service-list {
            list-style: none;
            text-align: left;
            margin: 10px auto;
            padding-left: 0;
            max-width: 500px;
          }

          .service-list li {
            font-size: 16px;
            color: #333;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
          }

          .service-icon {
            font-size: 18px;
            margin-right: 10px;
            color: #27ae60;
          }

          .home-button {
            background: #e74c3c;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 18px;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 20px;
            transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
          }

          .home-button:hover {
            background: #c0392b;
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="home-container">
        <h2 className="home-heading">Welcome to Spangles Infotech</h2>
        <p className="home-description">
          Spangles Infotech is a premier software solutions provider, offering cutting-edge 
          technologies for businesses worldwide. We specialize in web and mobile app development, 
          cloud computing, AI, and digital transformation.
        </p>
        
        <h3 className="home-services">Our Services</h3>
        <ol className="service-list">
          <li><i className="fas fa-code service-icon"></i> Custom Software Development</li>
          <li><i className="fas fa-mobile-alt service-icon"></i> Web & Mobile App Development</li>
          <li><i className="fas fa-cloud service-icon"></i> Cloud Solutions & DevOps</li>
          <li><i className="fas fa-robot service-icon"></i> Artificial Intelligence & Machine Learning</li>
          <li><i className="fas fa-lock service-icon"></i> Blockchain & Cybersecurity</li>
          <li><i className="fas fa-chart-line service-icon"></i> IT Consulting & Digital Marketing</li>
        </ol>

        <button className="home-button" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default Home;
