import React from 'react'
import PropTypes from 'prop-types'
import ListGroup from 'react-bootstrap/ListGroup'
import {convertStartTimeToTimeRange} from '../actions'

const Timeslot = ({appointment, onShowModalClicked}) => (
    <ListGroup.Item
        variant={(appointment.name && appointment.phoneNumber) ? "danger" : null}
        action onClick={onShowModalClicked}
    >
        {convertStartTimeToTimeRange(appointment.startTime)}
    </ListGroup.Item>
);

Timeslot.propTypes = {
    appointment: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        startTime: PropTypes.number.isRequired,
        modal: PropTypes.bool.isRequired
    }),
    onShowModalClicked: PropTypes.func.isRequired
};

export default Timeslot