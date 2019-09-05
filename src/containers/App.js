import React from 'react'
import NavBar from '../components/Navbar'
import TimeslotContainer from '../containers/TimeslotContainer'

const headerCenter = {
    textAlign: 'center',
    marginTop: '15px',
    marginBottom: '15px'
};

const App = () => (
    <div>
        <NavBar/>
        <h3 style={headerCenter}>Select an Appointment Time</h3>
        <TimeslotContainer />
    </div>
);

export default App
