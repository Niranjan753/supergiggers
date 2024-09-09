import React, { useState } from 'react';
import { FaToggleOn, FaToggleOff, FaGithub, FaLinkedin, FaTwitter, FaStar, FaEdit, FaSave } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Profile.scss';

const Profile = () => {
  const [profile, setProfile] = useState({
    basicInfo: {
      name: 'John Doe',
      title: 'Senior Web Developer',
      bio: 'Passionate web developer with 5+ years of experience.',
      email: 'john.doe@example.com',
      location: 'New York, USA',
      website: 'www.johndoe.com',
    },
    socialStats: {
      followers: 1234,
      following: 567,
    },
    activity: {
      gigsCompleted: 45,
      skillsLearned: 12,
      communitiesJoined: 8,
    },
    career: [
      { year: '2021 - Present', title: 'Senior Developer', company: 'Tech Co', description: 'Leading web development projects' },
      { year: '2018 - 2021', title: 'Web Developer', company: 'Web Solutions', description: 'Developed responsive web applications' },
      { year: '2015 - 2018', title: 'Junior Developer', company: 'StartUp Inc.', description: 'Assisted in frontend development' },
    ],
    education: [
      { year: '2015', degree: 'BSc Computer Science', institution: 'Tech University' },
      { year: '2012', degree: 'Associate Degree in Web Development', institution: 'Community College' },
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'CSS', 'Python', 'SQL'],
    projects: [
      { 
        title: 'E-commerce Platform', 
        description: 'Built a scalable e-commerce solution using React and Node.js',
        link: 'https://github.com/johndoe/ecommerce',
        reviews: [
          { rating: 5, comment: 'Excellent work! Very responsive and user-friendly.' },
          { rating: 4, comment: 'Great project, minor issues with mobile responsiveness.' }
        ]
      },
      { 
        title: 'Task Management App', 
        description: 'Developed a task management application with real-time updates',
        link: 'https://github.com/johndoe/taskmanager',
        reviews: [
          { rating: 5, comment: 'Incredibly useful and well-designed.' },
          { rating: 5, comment: 'Boosted our team\'s productivity significantly.' }
        ]
      }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newReviews, setNewReviews] = useState({});
  const [showLevelDetails, setShowLevelDetails] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (section, field, value) => {
    setProfile(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleArrayChange = (section, index, field, value) => {
    setProfile(prev => {
      const newSection = [...prev[section]];
      newSection[index] = { ...newSection[index], [field]: value };
      return { ...prev, [section]: newSection };
    });
  };

  const handleNewReviewChange = (projectIndex, field, value) => {
    setNewReviews(prev => ({
      ...prev,
      [projectIndex]: { ...prev[projectIndex], [field]: value }
    }));
  };

  const handleSubmitReview = (projectIndex) => {
    const review = newReviews[projectIndex];
    if (review && review.rating && review.comment) {
      setProfile(prev => {
        const newProjects = [...prev.projects];
        newProjects[projectIndex] = {
          ...newProjects[projectIndex],
          reviews: [...newProjects[projectIndex].reviews, review]
        };
        return { ...prev, projects: newProjects };
      });
      setNewReviews(prev => ({ ...prev, [projectIndex]: { rating: 0, comment: '' } }));
    }
  };

  const renderEditableField = (field, value, type = 'text') => (
    <div className="editable-field">
      {isEditing ? (
        <input
          type={type}
          value={value}
          onChange={(e) => handleChange('basicInfo', field, e.target.value)}
          className={`${field}-input`}
        />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );

  const renderTimeline = (section) => (
    <div className="timeline">
      {profile[section].map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={item.year}
                  onChange={(e) => handleArrayChange(section, index, 'year', e.target.value)}
                  className="year-input"
                />
                <input
                  type="text"
                  value={item.title || item.degree}
                  onChange={(e) => handleArrayChange(section, index, item.title ? 'title' : 'degree', e.target.value)}
                  className="title-input"
                />
                <input
                  type="text"
                  value={item.company || item.institution}
                  onChange={(e) => handleArrayChange(section, index, item.company ? 'company' : 'institution', e.target.value)}
                  className="company-input"
                />
                <textarea
                  value={item.description || ''}
                  onChange={(e) => handleArrayChange(section, index, 'description', e.target.value)}
                  className="description-input"
                />
              </>
            ) : (
              <>
                <h4>{item.year}</h4>
                <h3>{item.title || item.degree}</h3>
                <h5>{item.company || item.institution}</h5>
                {item.description && <p>{item.description}</p>}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderProjects = () => (
    <div className="projects">
      {profile.projects.map((project, index) => (
        <div key={index} className="project-item">
          {isEditing ? (
            <>
              <input
                type="text"
                value={project.title}
                onChange={(e) => handleChange('projects', index, 'title', e.target.value)}
              />
              <textarea
                value={project.description}
                onChange={(e) => handleChange('projects', index, 'description', e.target.value)}
              />
              <input
                type="text"
                value={project.link}
                onChange={(e) => handleChange('projects', index, 'link', e.target.value)}
              />
            </>
          ) : (
            <>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </>
          )}
          <div className="project-reviews">
            <h4>Reviews</h4>
            {project.reviews.map((review, reviewIndex) => (
              <div key={reviewIndex} className="review">
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color={i < review.rating ? "#ffc107" : "#e4e5e9"} />
                  ))}
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
          {!isEditing && (
            <div className="add-review">
              <h4>Add a Review</h4>
              <div className="rating-input">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    color={i < (newReviews[index]?.rating || 0) ? "#ffc107" : "#e4e5e9"}
                    onClick={() => handleNewReviewChange(index, 'rating', i + 1)}
                  />
                ))}
              </div>
              <textarea
                placeholder="Write your review here..."
                value={newReviews[index]?.comment || ''}
                onChange={(e) => handleNewReviewChange(index, 'comment', e.target.value)}
              />
              <button onClick={() => handleSubmitReview(index)}>Submit Review</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const toggleLevelDetails = () => {
    setShowLevelDetails(!showLevelDetails);
  };

  const renderSocialProfile = () => (
    <div className="social-profile">
      <div className="social-stats">
        <div className="stat">
          <span className="stat-value">{profile.socialStats.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat">
          <span className="stat-value">{profile.socialStats.following}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>
      <div className="activity-stats">
        <div className="stat">
          <span className="stat-value">{profile.activity.gigsCompleted}</span>
          <span className="stat-label">Gigs Completed</span>
        </div>
        <div className="stat">
          <span className="stat-value">{profile.activity.skillsLearned}</span>
          <span className="stat-label">Skills Learned</span>
        </div>
        <div className="stat">
          <span className="stat-value">{profile.activity.communitiesJoined}</span>
          <span className="stat-label">Communities Joined</span>
        </div>
      </div>
      <div className="level-badge">
        <button onClick={toggleLevelDetails} className="level-button">
          Level A
        </button>
        {showLevelDetails && (
          <div className="level-details">
            <h4>Level Details</h4>
            <p>Levels are based on:</p>
            <ul>
              <li>Reviews on projects</li>
              <li>Scores in skill enhancement tests</li>
            </ul>
            <p>Level A signifies exceptional performance and expertise.</p>
          </div>
        )}
      </div>
    </div>
  );

  const navigate = useNavigate();

  const handleMessageClick = () => {
    navigate('/messages');
  };

  return (
    <div className="profile">
      <div className="edit-toggle">
        <button onClick={handleToggleEdit}>
          {isEditing ? <FaToggleOn /> : <FaToggleOff />} Edit Mode
        </button>
      </div>

      <div className="profile-container">
        <div className="profile-section">
          <h2>profile.</h2>
          {isEditing ? (
            <div className="edit-profile">
              {renderEditableField('name', profile.basicInfo.name)}
              {renderEditableField('title', profile.basicInfo.title)}
              {renderEditableField('bio', profile.basicInfo.bio)}
              {renderEditableField('email', profile.basicInfo.email, 'email')}
              {renderEditableField('location', profile.basicInfo.location)}
              {renderEditableField('website', profile.basicInfo.website, 'url')}
            </div>
          ) : (
            <div className="basic-info">
              <h1>{profile.basicInfo.name}</h1>
              <h2>{profile.basicInfo.title}</h2>
              <p>{profile.basicInfo.bio}</p>
              <div className="contact-info">
                <p>{profile.basicInfo.email}</p>
                <p>{profile.basicInfo.location}</p>
                <p>{profile.basicInfo.website}</p>
              </div>
              <div className="social-links">
                <FaGithub /> <FaLinkedin /> <FaTwitter />
              </div>
            </div>
          )}
        </div>

        <div className="social-profile-section">
          <h2>activity.</h2>
          {renderSocialProfile()}
          <button className="message-btn" onClick={handleMessageClick}>Message</button>
        </div>

        <div className="portfolio-section">
          <h2>professional portfolio.</h2>
          
          <div className="career-skills-container">
            <div className="career">
              <h3>Career</h3>
              {renderTimeline('career')}
            </div>

            <div className="skills">
              <h3>Skills</h3>
              <div className="skill-tags">
                {profile.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {isEditing ? (
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => {
                          const newSkills = [...profile.skills];
                          newSkills[index] = e.target.value;
                          setProfile(prev => ({ ...prev, skills: newSkills }));
                        }}
                      />
                    ) : (
                      skill
                    )}
                  </span>
                ))}
                {isEditing && (
                  <button onClick={() => setProfile(prev => ({ ...prev, skills: [...prev.skills, ''] }))}>
                    Add Skill
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="education">
            <h3>Education</h3>
            {renderTimeline('education')}
          </div>

          <div className="projects">
            <h3>Projects</h3>
            {renderProjects()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;