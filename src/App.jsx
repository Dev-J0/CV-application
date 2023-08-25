import React from 'react';
import firstSection from './components/firstSection';
import secondSection from './components/secondSection';
import thirdSection from './components/thirdSection';


function App() {
 
  return (
    <div className="App">
      <h1> CV Application</h1>
      <h2> Please enter your personal data</h2>
      <firstSection />
      <secondSection />
      <thirdSection />
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
