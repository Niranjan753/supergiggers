import React, { useState } from "react";
import "./UpSkill.scss";
import { FaCode, FaDesktop, FaPencilAlt, FaCamera, FaChartLine, FaLanguage, FaTimes, FaStar, FaPalette, FaMusic, FaLaptopCode, FaChalkboardTeacher } from 'react-icons/fa';

function UpSkill() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDomainSelection, setShowDomainSelection] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(null);

  const skillCategories = [
    { icon: <FaCode />, title: "Programming", description: "Learn popular programming languages and frameworks" },
    { icon: <FaDesktop />, title: "Design", description: "Master graphic design, UI/UX, and digital art" },
    { icon: <FaPencilAlt />, title: "Writing", description: "Improve your copywriting, content creation, and editing skills" },
    { icon: <FaCamera />, title: "Photography", description: "Enhance your photography and photo editing techniques" },
    { icon: <FaChartLine />, title: "Marketing", description: "Learn digital marketing, SEO, and social media strategies" },
    { icon: <FaLanguage />, title: "Languages", description: "Acquire new languages or improve your existing language skills" },
  ];

  const courseData = {
    Programming: [
      {
        title: "Python for Beginners",
        description: "Learn Python programming from scratch",
        link: "https://www.coursera.org/learn/python",
        price: "Free",
        rating: 4.7,
        reviews: [
          { text: "Great course for beginners!", author: "John D." },
          { text: "Very comprehensive and well-structured", author: "Sarah M." },
          { text: "Excellent introduction to Python", author: "Mike R." },
          { text: "The exercises really helped solidify the concepts", author: "Emily L." },
          { text: "Instructor explains everything clearly", author: "David W." }
        ]
      },
      {
        title: "Web Development Bootcamp",
        description: "Comprehensive course on full-stack web development",
        link: "https://www.udemy.com/course/the-web-developer-bootcamp/",
        price: "$59.99",
        rating: 4.8,
        reviews: [
          { text: "Changed my career path!", author: "Alex K." },
          { text: "Incredibly detailed and up-to-date", author: "Lisa T." },
          { text: "Best web dev course I've taken", author: "Robert M." },
          { text: "Challenging but very rewarding", author: "Sophie B." },
          { text: "Great projects that build real-world skills", author: "Chris L." }
        ]
      },
      {
        title: "JavaScript Fundamentals",
        description: "Master the basics of JavaScript programming",
        link: "https://www.codecademy.com/learn/introduction-to-javascript",
        price: "Free",
        rating: 4.6,
        reviews: [
          { text: "Clear explanations and good exercises", author: "Lisa T." },
          { text: "Perfect for beginners", author: "David W." },
          { text: "Instructor is very knowledgeable", author: "Emily L." },
          { text: "Great for building a strong foundation", author: "Mike R." },
          { text: "Excellent resource for learning JavaScript", author: "Sarah M." }
        ]
      },
      { title: "Python for Beginners", description: "Learn Python programming from scratch", link: "https://www.coursera.org/learn/python", price: "Free", rating: 4.7, reviews: [{ text: "Great course for beginners!", author: "John D." }, { text: "Very comprehensive and well-structured", author: "Sarah M." }] },
      { title: "Web Development Bootcamp", description: "Comprehensive course on full-stack web development", link: "https://www.udemy.com/course/the-web-developer-bootcamp/", price: "$59.99", rating: 4.8, reviews: [{ text: "Excellent content and instructor", author: "Mike R." }, { text: "Changed my career path!", author: "Emily L." }] },
      { title: "JavaScript Fundamentals", description: "Master the basics of JavaScript programming", link: "https://www.codecademy.com/learn/introduction-to-javascript", price: "Free", rating: 4.6, reviews: [{ text: "Clear explanations and good exercises", author: "Alex K." }, { text: "Perfect for beginners", author: "Lisa T." }] },
      { title: "React.js Essential Training", description: "Learn to build dynamic UIs with React", link: "https://www.linkedin.com/learning/react-js-essential-training", price: "$29.99/month", rating: 4.9, reviews: [{ text: "Comprehensive and up-to-date", author: "David W." }, { text: "Great for React beginners", author: "Sophie B." }] },
      { title: "Java Programming Masterclass", description: "Comprehensive Java course for beginners to advanced", link: "https://www.udemy.com/course/java-the-complete-java-developer-course/", price: "$84.99", rating: 4.7, reviews: [{ text: "In-depth coverage of Java", author: "Robert M." }, { text: "Excellent course structure", author: "Anna P." }] },
      { title: "Data Structures and Algorithms", description: "Learn essential computer science concepts", link: "https://www.coursera.org/specializations/data-structures-algorithms", price: "Free to audit", rating: 4.8, reviews: [{ text: "Challenging but rewarding", author: "Chris L." }, { text: "Great for interview prep", author: "Megan S." }] },
      { title: "Machine Learning with Python", description: "Introduction to machine learning techniques", link: "https://www.edx.org/course/machine-learning-with-python-from-linear-models-to", price: "Free", rating: 4.6, reviews: [{ text: "Excellent introduction to ML", author: "Tom H." }, { text: "Good balance of theory and practice", author: "Laura K." }] },
      { title: "iOS App Development with Swift", description: "Learn to build iOS apps from scratch", link: "https://www.udacity.com/course/ios-developer-nanodegree--nd003", price: "$399/month", rating: 4.7, reviews: [{ text: "Comprehensive iOS development course", author: "Mark D." }, { text: "Great projects and support", author: "Rachel F." }] },
      { title: "Full Stack Open", description: "Modern web development with JavaScript", link: "https://fullstackopen.com/en/", price: "Free", rating: 4.9, reviews: [{ text: "Best free resource for full-stack development", author: "Daniel R." }, { text: "Challenging but very rewarding", author: "Emma W." }] },
      { title: "Blockchain Fundamentals", description: "Understanding blockchain technology and applications", link: "https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals", price: "$198", rating: 4.5, reviews: [{ text: "Great introduction to blockchain", author: "Steven G." }, { text: "Well-structured and informative", author: "Olivia M." }] },
    ],
    Design: [
      // Add 10 design courses here with similar structure
    ],
    Writing: [
      // Add 10 writing courses here with similar structure
    ],
    Photography: [
      // Add 10 photography courses here with similar structure
    ],
    Marketing: [
      // Add 10 marketing courses here with similar structure
    ],
    Languages: [
      // Add 10 language courses here with similar structure
    ],
  };

  const domains = [
    { icon: <FaCode />, title: "Web Development" },
    { icon: <FaDesktop />, title: "UI/UX Design" },
    { icon: <FaPencilAlt />, title: "Content Writing" },
    { icon: <FaCamera />, title: "Photography" },
    { icon: <FaChartLine />, title: "Digital Marketing" },
    { icon: <FaLanguage />, title: "Translation" },
    { icon: <FaPalette />, title: "Graphic Design" },
    { icon: <FaMusic />, title: "Audio Production" },
    { icon: <FaLaptopCode />, title: "Mobile App Development" },
  ];

  const openCourseModal = (category) => {
    setSelectedCategory(category);
  };

  const closeCourseModal = () => {
    setSelectedCategory(null);
  };

  const toggleDomainSelection = () => {
    setShowDomainSelection(!showDomainSelection);
    setSelectedDomain(null);
  };

  const selectDomain = (domain) => {
    setSelectedDomain(domain);
  };

  return (
    <div className={`upskill ${selectedCategory ? 'modal-open' : ''}`}>
      <div className="container">
        <p className="subtitle">Unlock your potential and stay ahead in the freelance market</p>
        <h1>Assess Your Skills</h1>
        <p>Take our quick skill assessment to identify areas for improvement:</p>
        <button className="assessment-btn small" onClick={toggleDomainSelection}>Start Skill Assessment</button>

        {showDomainSelection && !selectedDomain && (
          <div className="domain-selection">
            <h2>Choose Your Domain</h2>
            <div className="domain-grid">
              {domains.map((domain, index) => (
                <div key={index} className="domain-card" onClick={() => selectDomain(domain)}>
                  <div className="icon">{domain.icon}</div>
                  <h3>{domain.title}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedDomain && (
          <ScheduleTestForm domain={selectedDomain} onClose={() => setSelectedDomain(null)} />
        )}

        <h2>Explore Skill Categories</h2>
        <div className="skill-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <button onClick={() => openCourseModal(category.title)}>Explore Courses</button>
            </div>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <div className="course-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeCourseModal}><FaTimes /></button>
            <h2>{selectedCategory} Courses</h2>
            <div className="course-list">
              {courseData[selectedCategory].map((course, index) => (
                <div key={index} className="course-item">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-details">
                    <div className="rating">
                      <FaStar /> {course.rating.toFixed(1)}
                    </div>
                    <span className="price">{course.price}</span>
                  </div>
                  <div className="reviews">
                    <h4>Reviews:</h4>
                    <div className="review-list">
                      {course.reviews.map((review, idx) => (
                        <div key={idx} className="review">
                          <p>"{review.text}"</p>
                          <span>- {review.author}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href={course.link} target="_blank" rel="noopener noreferrer" className="course-link">Go to Course</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ScheduleTestForm({ domain, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Test scheduled successfully!');
    onClose();
  };

  return (
    <div className="schedule-test-form">
      <h2>Schedule Test for {domain.title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Years of Experience</label>
          <select id="experience" name="experience" value={formData.experience} onChange={handleChange} required>
            <option value="">Select experience</option>
            <option value="0-1">0-1 years</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5+">5+ years</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Preferred Time</label>
          <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="form-actions">
          <button type="submit">Schedule Test</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UpSkill;
