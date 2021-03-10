import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Team.css';

const Team = props => {
    const { strTeam, strSport, strTeamBadge, idTeam } = props.team;

    return (
        <>
            <div className="card mx-2 mt-3 bg-success">
                <img
                    className="card-image-top mt-2"
                    src={strTeamBadge}
                    alt=""
                />
                <div className="card-body text-center">
                    <h5 className="card-title"> {strTeam}</h5>
                    <p className="card-text">Sports Type: {strSport}</p>
                    <Link to={`/team/${idTeam}`}>
                        <button className="btn btn-warning text-white">
                            Details{' '}
                            <FontAwesomeIcon icon={faArrowCircleRight} />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Team;
