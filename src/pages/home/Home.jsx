import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import { FaTwitter, FaCode, FaSearch, FaComments, FaPaintBrush, FaBookmark, FaPen, FaGlobe, FaUser, FaLock, FaChartBar, FaHandshake } from 'react-icons/fa';


function Home() {
  const solutionCards = [
    {
      icon: <FaGlobe />,
      title: "Freelance Job Marketplace",
      description: "Connect freelancers with short-term jobs, gig work, and project-based opportunities."
    },
    {
      icon: <FaUser />,
      title: "Freelancer Profiles",
      description: "Create detailed profiles showcasing skills, experiences, and portfolio of past work."
    },
    {
      icon: <FaSearch />,
      title: "Extensive Search & Analytics",
      description: "AI-powered search and insights for job seekers and employers."
    },
    {
      icon: <FaLock />,
      title: "Escrow Account",
      description: "Secure payment system with escrow functionality for smooth transactions."
    },
    {
      icon: <FaChartBar />,
      title: "AI Recommendations",
      description: "Intelligent job matching and opportunity recommendations."
    },
    {
      icon: <FaHandshake />,
      title: "Project Management",
      description: "Tools for efficient management of freelance projects and collaborations."
    }
  ];

  const marketplaceCards = [
    { icon: <FaCode />, title: "Web Development", description: "Find skilled developers for your web projects, from front-end to back-end solutions." },
    { icon: <FaPen />, title: "Graphic Design", description: "Discover talented designers for logos, branding, illustrations, and visual content creation." },
    { icon: <FaPen />, title: "Content Writing", description: "Connect with expert writers for blog posts, articles, copywriting, and more." },
    { icon: <FaHandshake />, title: "Digital Marketing", description: "Hire marketing professionals for SEO, social media, PPC, and comprehensive digital strategies." },
    { icon: <FaUser />, title: "Video Production", description: "Collaborate with videographers and editors for high-quality video content creation." },
    { icon: <FaUser />, title: "Virtual Assistance", description: "Find reliable virtual assistants for administrative tasks, scheduling, and customer support." }
  ];

  return (
    <div className="home">
      <Featured />
      {/* <TrustedBy /> */}
      <div className="solution-cards">
        <div className="container">
          <h2>Freelancing Solutions</h2>
          <div className="cards">
            {solutionCards.map((card, index) => (
              <div className="card" key={index}>
                <div className="icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="explore-marketplace">
        <div className="container">
          <h2>Explore the Marketplace</h2>
          <div className="marketplace-cards">
            {marketplaceCards.map((card, index) => (
              <div 
                className="marketplace-card" 
                key={index} 
                onClick={() => alert(`Title: ${card.title}\nDescription: ${card.description}\nClick to explore more about ${card.title} and find the best professionals for your needs.`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
