import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {addAppointmentToTimeslot} from "../actions"

const TimeslotModal = ({appointment, dispatch, onHide}) => {

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(addAppointmentToTimeslot(appointment.startTime, event.target.name.value, event.target.phoneNumber.value));
    };

    if (appointment.name && appointment.phoneNumber) {
        return (
            <Modal size="lg" show={appointment.modal} onHide={onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>
                        Person who is scheduled for this appointment.
                    </h4>
                    <p>Name: {appointment.name}</p>
                    <p>Phone Number: {appointment.phoneNumber}</p>
                </Modal.Body>
            </Modal>
        );
    }

	return (
		<Modal size="lg" show={appointment.modal} onHide={onHide} centered>
			<Modal.Header closeButton>
				<Modal.Title>Set Up an Appointment</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>
					Please enter your Name and Phone Number to book this time
					slot.
				</h4>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="formName">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Name"
							name="name"
							required
						/>
					</Form.Group>
					<Form.Group controlId="formPhoneNumber">
						<Form.Label>Phone Number</Form.Label>
						<Form.Control
							type="tel"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            title="Phone Number should be of this Format XXX-XXX-XXXX"
							placeholder="Enter Phone Number"
							name="phoneNumber"
							required
						/>
					</Form.Group>
					<Button type="submit">
						Submit
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

TimeslotModal.propTypes = {
	appointment: PropTypes.shape({
		name: PropTypes.string.isRequired,
		phoneNumber: PropTypes.string.isRequired,
		startTime: PropTypes.number.isRequired,
		modal: PropTypes.bool.isRequired
	}).isRequired,
	dispatch: PropTypes.func.isRequired,
	onHide: PropTypes.func.isRequired
};

export default TimeslotModal;