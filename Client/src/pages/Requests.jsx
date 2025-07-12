import React, { useState } from "react";
import "./Requests.css";
import UserBox from "./UserBox";

const Requests = () => {
  const [filter, setFilter] = useState("Pending");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const requests = [
    { id: 1, name: "Marc Demo", status: "Pending", rating: 3.9, skillsOffered: ["JavaScript"], skillsWanted: ["Photoshop"], profilePhoto: "" },
    { id: 2, name: "John Smith", status: "Rejected", rating: 3.9, skillsOffered: ["Python"], skillsWanted: ["UI Design"], profilePhoto: "" },
    { id: 3, name: "Alice Johnson", status: "Accepted", rating: 4.2, skillsOffered: ["React"], skillsWanted: ["Node.js"], profilePhoto: "" },
    { id: 4, name: "Brian Lee", status: "Pending", rating: 4.5, skillsOffered: ["Figma"], skillsWanted: ["HTML", "CSS"], profilePhoto: "" },
    { id: 5, name: "Sara Patel", status: "Rejected", rating: 2.8, skillsOffered: ["Video Editing"], skillsWanted: ["Graphic Design"], profilePhoto: "" },
    { id: 6, name: "David Kim", status: "Accepted", rating: 4.8, skillsOffered: ["C++"], skillsWanted: ["Data Structures"], profilePhoto: "" },
    { id: 7, name: "Emily Chen", status: "Pending", rating: 3.5, skillsOffered: ["Photography"], skillsWanted: ["Digital Marketing"], profilePhoto: "" },
    { id: 8, name: "Liam Walker", status: "Rejected", rating: 2.9, skillsOffered: ["Public Speaking"], skillsWanted: ["Writing"], profilePhoto: "" },
    { id: 9, name: "Olivia Brown", status: "Accepted", rating: 4.1, skillsOffered: ["UI Design"], skillsWanted: ["UX Research"], profilePhoto: "" },
    { id: 10, name: "Noah Davis", status: "Pending", rating: 3.7, skillsOffered: ["SQL"], skillsWanted: ["Excel"], profilePhoto: "" },
  ];

  const filteredRequests = requests.filter(
    (req) =>
      req.status === filter &&
      req.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRequests = filteredRequests.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const goToPage = (page) => setCurrentPage(page);

  return (
    <div className="requests-container">
      <div className="filter-bar">
        Show results for:
        <select value={filter} onChange={(e) => { setFilter(e.target.value); setCurrentPage(1); }}>
          <option value="Pending">Pending</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
        </select>
        <input
          type="text"
          placeholder="search"
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
        />
      </div>

      <div className="requests-list">
        {paginatedRequests.map((req) => (
          <div className="request-wrapper" key={req.id}>
            <UserBox
              name={req.name}
              skillsOffered={req.skillsOffered}
              skillsWanted={req.skillsWanted}
              rating={req.rating}
              profilePhoto={req.profilePhoto}
              status={req.status}
              showActions={true}
            />
          </div>
        ))}
      </div>

      <div className="pagination">
        <span onClick={handlePrev}>&lt;</span>
        {[...Array(totalPages)].map((_, i) => (
          <span
            key={i}
            className={currentPage === i + 1 ? "current" : ""}
            onClick={() => goToPage(i + 1)}
          >
            {i + 1}
          </span>
        ))}
        <span onClick={handleNext}>&gt;</span>
      </div>
    </div>
  );
};

export default Requests;
