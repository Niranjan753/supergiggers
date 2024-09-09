import React from "react";
import "./ExpandedCard.scss";

function ExpandedCard({ card }) {
  return (
    <div className="expanded-content">
      <img src={card.img} alt={card.title} />
      <h2>{card.title}</h2>
      <p className="description">{card.desc}</p>
      <div className="more-about-section">
        <h3>More About {card.title}</h3>
        <div className="card-grid">
          <div className="info-card">
            <h4>Overview</h4>
            <p>This service provides expert {card.title.toLowerCase()} to enhance your project or business needs.</p>
          </div>
          <div className="info-card">
            <h4>Benefits</h4>
            <p>Utilizing {card.title} can significantly improve your workflow and final product quality.</p>
          </div>
          <div className="info-card">
            <h4>Process</h4>
            <p>Our {card.title.toLowerCase()} experts follow a structured approach to deliver high-quality results.</p>
          </div>
          <div className="info-card">
            <h4>Applications</h4>
            <p>{card.title} can be applied in various industries and projects to achieve innovative outcomes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandedCard;
