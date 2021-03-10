import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url =
            'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data?.teams));
    }, []);

    const styles = {
        topBanner: {
            backgroundImage: `url(https://www.thesportsdb.com/images/media/team/stadium/pigyw41550061064.jpg)`,
            height: '50vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
        topText: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.80)',
        },
    };

    return (
        <div>
            <div style={styles.topBanner}>
                <div style={styles.topText}>
                    <h1 className="text-danger text-center pt-5">
                        <FontAwesomeIcon icon={faFutbol} />{' '}
                        <FontAwesomeIcon icon={faFutbol} /> Dream Soccer Team{' '}
                        <FontAwesomeIcon icon={faFutbol} />{' '}
                        <FontAwesomeIcon icon={faFutbol} />
                    </h1>
                </div>
            </div>

            <div>
                <div className="bg-secondary ">
                    <div className="container">
                        <div className="row">
                            {teams?.map(team => (
                                <Team key={team.idTeam} team={team}></Team>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
