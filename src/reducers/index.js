import {
	ADD_APPOINTMENT,
	HIDE_MODAL,
	SHOW_MODAL
} from "../actions/ActionTypes";

const initialState = [
	{
		name: "",
		phoneNumber: "",
		startTime: 9,
		modal: false
	},
	{
		name: "",
		phoneNumber: "",
		startTime: 10,
		modal: false
	},
	{
		name: "",
		phoneNumber: "",
		startTime: 11,
		modal: false
	},
	{
		name: "",
		phoneNumber: "",
		startTime: 12,
		modal: false
	},
	{
		name: "",
		phoneNumber: "",
		startTime: 13,
		modal: false
	},
	{
		name: "",
		phoneNumber: "",
		startTime: 14,
		modal: false
	},
	{
		name: "",
		phoneNumber: "",
		startTime: 15,
		modal: false
	},
	{
		name: "",
		phoneNumber: "",
		startTime: 16,
		modal: false
	}
];

function todoListReducer(state = initialState, action) {
	switch (action.type) {
		case SHOW_MODAL:
			return state.map(appointment => {
				if (appointment.startTime === action.startTime) {
					return {
						...appointment,
						modal: true
					};
				}

				return appointment;
			});
		case HIDE_MODAL:
			return state.map(appointment => {
				if (appointment.startTime === action.startTime) {
					return {
						...appointment,
						modal: false
					};
				}

				return appointment;
			});
		case ADD_APPOINTMENT:
			return state.map(appointment => {
				if (appointment.startTime === action.startTime) {
					return {
						...appointment,
						name: action.name,
						phoneNumber: action.phoneNumber,
						modal: false
					};
				}

				return appointment;
			});
		default:
			return state;
	}
}

export default todoListReducer;
