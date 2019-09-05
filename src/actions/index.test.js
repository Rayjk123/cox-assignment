import * as actions from "./index";
import * as types from "./ActionTypes";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let store;

describe("actions", () => {
	beforeEach(() => {
		const initialState = [
			{
				name: "",
				phoneNumber: "",
				startTime: 9,
				modal: false
			}
		];
		store = mockStore(initialState);
	});

	test("onHide should create HIDE_MODAL action", () => {
		store.dispatch(actions.onHide(9));

		const expectedAction = { type: types.HIDE_MODAL, startTime: 9 };
		const actionsList = store.getActions();
		expect(actionsList).toEqual([expectedAction]);
	});

	test("showModalWithData should create SHOW_MODAL action", () => {
		store.dispatch(actions.showModalWithData(9));

		const expectedAction = { type: types.SHOW_MODAL, startTime: 9 };
		const actionsList = store.getActions();
		expect(actionsList).toEqual([expectedAction]);
	});

	test("addAppointmentToTimeslot creates expected action", () => {
		const expectedAction = {
			type: types.ADD_APPOINTMENT,
			startTime: 9,
			name: "panda",
			phoneNumber: "888-888-8888"
		};
		const action = actions.addAppointmentToTimeslot(
			9,
			"panda",
			"888-888-8888"
		);

		expect(action).toEqual(expectedAction);
	});
});
