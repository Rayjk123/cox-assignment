import React from 'react'
import PropTypes from 'prop-types'

const TimeslotList = ({children}) => {
    return (<div>
        {children}
    </div>);
};

TimeslotList.propTypes = {
    children: PropTypes.node
};

export default TimeslotList
