import React from 'react';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';


function App() {
 
  return (
    <div className="App">
      <h1> CV Application</h1>
      <h2> Please enter your personal data</h2>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
 
}

export default App;

//Basic info
//name
//email
//phone number
//submit info button


//Educational Experience
//School name
//title of study
//date of study
//submit info button

//Practical experience
//company name
//position title
//main responsabilities of your jobs
//date from and until when you worked for that company
//submit info button
