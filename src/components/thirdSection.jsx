import React from 'react'
import { useState } from 'react';

function ThirdSection() {
    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [responsabilities, setResponsabilities] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const handleCompanyChange = (event) => {
        setCompany(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleResponsabilitiesChange = (event) => {
        setResponsabilities(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsRegistered(true);
    };

    const handleEdit = () => {
        setIsRegistered(false);
    };

    return (
        <div className="experience-section">
            {isRegistered ? (
                <>
                <p>Company Name: {company}</p>
                <p>Position Title: {title}</p>
                <p>Main Responsabilities of your job: {responsabilities}</p>
                <button onClick={handleEdit}>Edit Info</button>
                </>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Company Name
                        <input type="text" value={company} onChange={handleCompanyChange}
                        />
                    </label>
                    <label>
                        Position Title 
                        <input type="text" value={title} onChange={handleTitleChange}
                        />
                    </label>
                    <label>
                        Main Resposabilities 
                        <input value="text" value={responsabilities} onChange={handleResponsabilitiesChange}
                        />
                    </label>
                    <button type="submit">Register Data</button>
                </form>
            )
             }
        </div>
    );
}


export default ThirdSection;