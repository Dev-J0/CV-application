import {useState} from 'react'


function FirstSection() {
      const [name, setName] = useState('');
      const [phoneNumber, setPhoneNumber] = useState('');
      const [email, setEmail] = useState('');
      const [isRegistered, setIsRegistered] = useState(false);
    
      const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
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
              <p>Name: {name}</p>
              <p>Phone Number: {phoneNumber}</p>
              <p>Email: {email}</p>
              <button onClick={handleEdit}>Edit Contact</button>
            </>
          ) : (
            
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>
              <button type="submit">Register Contact</button>
            </form>
            
          )}
        </div>
      );
    }


export default FirstSection;