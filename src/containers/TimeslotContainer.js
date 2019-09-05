import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {showModalWithData, onHide} from "../actions";
import Timeslot from "../components/Timeslot";
import TimeslotList from "../components/TimeslotList";
import TimeslotModal from "../components/TimeslotModal";

const TimeslotContainer = ({appointments, showModalWithData, onHide, dispatch}) => (
    <TimeslotList>
        {appointments.map(appointment =>
            <div key={appointment.startTime}>
                <Timeslot
                    appointment={appointment}
                    onShowModalClicked={() => showModalWithData(appointment.startTime)}
                />
                <TimeslotModal appointment={appointment}
                               dispatch={dispatch}
                               onHide={() => onHide(appointment.startTime)}
                />
            </div>
        )}
    </TimeslotList>
);

TimeslotContainer.propTypes = {
    appointments: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            phoneNumber: PropTypes.string.isRequired,
            startTime: PropTypes.number.isRequired
        })
    ).isRequired,
    showModalWithData: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        appointments: state
    }
};

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({ showModalWithData, onHide }, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeslotContainer);
