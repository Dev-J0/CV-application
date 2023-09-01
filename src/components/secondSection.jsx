import { useState } from "react";

function SecondSection() {
  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [dateOfStudy, setDateOfStudy] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSchoolNameChange = (event) => {
    setSchoolName(event.target.value);
  };

  const handleTitleOfStudy = (event) => {
    setTitleOfStudy(event.target.value);
  };

  const handleDateOfStudy = (event) => {
    setDateOfStudy(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsRegistered(true);
  };

  const handleEdit = () => {
    setIsRegistered(false);
  };

  return (
    <div className="contact-section">
      {isRegistered ? (
        <>
          <p>School Name: {schoolName}</p>
          <p>Title of Study: {titleOfStudy}</p> {/* Fix the typo here */}
          <p>Date of Study: {dateOfStudy}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            School Name
            <input
              type="text"
              value={schoolName}
              onChange={handleSchoolNameChange}
            />
          </label>
          <label>
            Title of Study
            <input
              type="text"
              value={titleOfStudy}
              onChange={handleTitleOfStudy}
            />
          </label>
          <label>
            Date of Study
            <input
              type="date"
              value={dateOfStudy}
              onChange={handleDateOfStudy}
            />
          </label>
          <button type="submit">Register data</button>
        </form>
      )}
    </div>
  );
}

export default SecondSection;
