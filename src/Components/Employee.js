import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoitem from './moptro logo.png';

const Employee = () => {
  const [searchQuery, setSearchQuery] = useState('');

  
  const employeeDetails = [
    { attribute: 'EMP ID', value: '1' },
    { attribute: 'NAME', value: 'ARJUN' },
    { attribute: 'DOB', value: '11-06-2020' },
    { attribute: 'ROLE', value: 'SOFTWARE ENGINEER' },
    ];
    const employeeDetails1 = [
    { attribute: 'EMP ID', value: '2' },
    { attribute: 'NAME', value: 'SARAH' },
    { attribute: 'DOB', value: '05-21-1995' },
    { attribute: 'ROLE', value: 'DATA SCIENTIST' },
    // Add more employees as needed
  ];

  const Navigate = useNavigate();

  const handleEmployeeButtonClick = () => {
    Navigate('/employee');
  };

  const handleHomeButtonClick = () => {
    // Handle home button click, e.g., navigate to the home page
    Navigate('/home');
  };

  return (
    <div style={darkThemeStyle}>
      <div className="header" style={headerStyle}>
        <img src={logoitem} alt="Logo" className="logo" style={logoStyle} width={'180px'}/>
        <div style={searchBarContainerStyle}>
          <input
            type="text"
            placeholder="Search name "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={searchBarStyle}
          />
        </div>
      </div>

      {/* Employee Productivity Section */}
<div className="Employee-Dashboard" style={employeeDashboardContainerStyle}>
  <div style={{ overflowY: 'auto', maxHeight: '300px' }}>
    <ul style={listStyle}>
      {employeeDetails.map(({ attribute, value }) => (
        <li key={attribute} style={listItemStyle}>
          <span>{attribute}</span>
          <span style={greenNumberStyle}>{value}</span>
        </li>
      ))}
    </ul>
  </div>
</div>
 {/* Employee Productivity Section */}
 <div className="Employee-Dashboard" style={employeeDashboardContainerStyle}>
  <div style={{ overflowY: 'auto', maxHeight: '300px' }}>
    <ul style={listStyle}>
      {employeeDetails1.map(({ attribute, value }) => (
        <li key={attribute} style={listItemStyle}>
          <span>{attribute}</span>
          <span style={greenNumberStyle}>{value}</span>
        </li>
      ))}
    </ul>
  </div>
</div>
      {/* Buttons Section */}
      <div className="buttons" style={buttonsContainerStyle}>
        <button className="home-button" style={buttonStyle} onClick={handleHomeButtonClick}>
          Home
        </button>
        <button className="employee-button" style={buttonStyle} onClick={handleEmployeeButtonClick}>
          Employee
        </button>
      </div>
    </div>
  );
};
//===============================================================================================================================================
// Dark theme styles
const darkThemeStyle = {
  backgroundColor: '#111111',
  color: '#ffffff',
  minHeight: '100vh',
  boxSizing: 'border-box',
  margin: '0',
};

// Inline styles
const headerStyle = {
    marginTop:'250px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#11111', // Darker background for the header
};

const logoStyle = {
   top:'100px',
  width: '130px',
  height: '130px',
};

const headingContainerStyle = {
    fontSize: '20px', 
  backgroundColor: '#1A2C2C99',
  padding: '20px',
  borderRadius: '15px',
  marginTop: '10px',
  marginBottom:'-22.5px'
};

const employeeDashboardContainerStyle = {
  padding: '25px',
  backgroundColor: '#444444', // Darker background for the employee dashboard
  borderRadius: '25px',
  marginBottom:'5px'
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
};

const listItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
};

const greenNumberStyle = {
  color: '#36A54680', // Green color for numbers
};

const buttonsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '5px',
};

const buttonStyle = {
    marginTop:'85px',
  width: '211px', // Adjust as needed
  height: '63px', // Adjust as needed
  background: 'transparent linear-gradient(262deg, #0F2323 0%, #0F2323 40%) 0% 0% no-repeat padding-box',
  boxShadow: 'inset 8px 4px 4px #00000040',
  mixBlendMode: 'normal',
  border: '1px solid #0F2323',
  opacity: '1',
  borderRadius: '15px', // Added border-radius
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff',
  cursor: 'pointer',
};
const searchBarContainerStyle = {
   
    display: 'flex',
    justifyContent: 'center',
  };
  
  const searchBarStyle = {
    width: '320px', // Adjust the width as needed
    padding: '20px', // Adjust the padding as needed
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#333333',
    color: '#ffffff',
  };


export default Employee;
