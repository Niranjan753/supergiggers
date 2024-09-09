import React, { useRef, useState } from "react";
import "./Gigs.scss";
import { gigs as initialGigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

function Gigs() {
  const [gigs, setGigs] = useState(initialGigs);
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newGig, setNewGig] = useState({
    title: "",
    description: "",
    budget: "",
    duration: "",
    skills: "",
    clientName: "",
    clientRating: 0,
    image: "",
  });

  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGig({ ...newGig, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGigWithId = {
      ...newGig,
      id: gigs.length + 1,
      skills: newGig.skills.split(",").map((skill) => skill.trim()),
    };
    console.log("New Gig:", newGigWithId); // Debugging line
    setGigs([...gigs, newGigWithId]);
    setShowForm(false);
    setNewGig({
      title: "",
      description: "",
      budget: "",
      duration: "",
      skills: "",
      clientName: "",
      clientRating: 0,
      image: "",
    });
  };

  return (
    <div className="gigs-page">
      <div className="container">
        <div className="breadcrumbs">supergigs > Graphics & Design ></div>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with supergigs's AI
          artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="./img/down.png"
              alt=""
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <button className="create-gig-button" onClick={() => setShowForm(true)}>Create New Gig</button>
        {showForm && (
          <form className="create-gig-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={newGig.title}
              onChange={handleInputChange}
              placeholder="Gig Title"
              required
            />
            <textarea
              name="description"
              value={newGig.description}
              onChange={handleInputChange}
              placeholder="Gig Description"
              required
            />
            <input
              type="text"
              name="budget"
              value={newGig.budget}
              onChange={handleInputChange}
              placeholder="Budget"
              required
            />
            <input
              type="text"
              name="duration"
              value={newGig.duration}
              onChange={handleInputChange}
              placeholder="Duration"
              required
            />
            <input
              type="text"
              name="skills"
              value={newGig.skills}
              onChange={handleInputChange}
              placeholder="Skills (comma separated)"
              required
            />
            <input
              type="text"
              name="clientName"
              value={newGig.clientName}
              onChange={handleInputChange}
              placeholder="Client Name"
              required
            />
            <input
              type="number"
              name="clientRating"
              value={newGig.clientRating}
              onChange={handleInputChange}
              placeholder="Client Rating"
              min="0"
              max="5"
              step="0.1"
              required
            />
            <input
              type="text"
              name="image"
              value={newGig.image}
              onChange={handleInputChange}
              placeholder="Image URL"
              required
            />
            <button type="submit">Submit</button>
          </form>
        )}
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
