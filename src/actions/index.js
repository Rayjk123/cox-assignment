import { ADD_APPOINTMENT, HIDE_MODAL, SHOW_MODAL } from "./ActionTypes";

const showModal = startTime => ({
	type: SHOW_MODAL,
	startTime
});

const hideModal = startTime => ({
	type: HIDE_MODAL,
	startTime
});

export const addAppointmentToTimeslot = (startTime, name, phoneNumber) => ({
	type: ADD_APPOINTMENT,
	startTime,
	name,
	phoneNumber
});

export const showModalWithData = startTime => (dispatch, ownProps) => {
	dispatch(showModal(startTime));
};

export const onHide = startTime => (dispatch, ownProps) => {
	dispatch(hideModal(startTime));
};

export function convertStartTimeToTimeRange(startTime) {
	switch (startTime) {
		case 9:
			return "9am - 10am";
		case 10:
			return "10am - 11am";
		case 11:
			return "11am - 12pm";
		case 12:
			return "12pm - 1pm";
		case 13:
			return "1pm - 2pm";
		case 14:
			return "2pm - 3pm";
		case 15:
			return "3pm - 4pm";
		case 16:
			return "4pm - 5pm";
		default:
			return "Not Valid Business Hours";
	}
}
