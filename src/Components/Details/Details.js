import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';
import male from '../../Photos/male.png';
import female from '../../Photos/female.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCalendarAlt,
   faFlag,
   faFutbol,
   faVenusMars,
} from '@fortawesome/free-solid-svg-icons';
import {
   faFacebook,
   faTwitter,
   faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Details = () => {
   const { idTeam } = useParams();
   const [teams, setTeams] = useState({});
   console.log(teams);
   useEffect(() => {
      const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setTeams(data?.teams[0]));
   }, [idTeam]);

   const {
      strTeam,
      strTeamBadge,
      intFormedYear,
      strCountry,
      strSport,
      strStadiumThumb,
      strGender,
      strFacebook,
      strYoutube,
      strTwitter,
      strDescriptionEN,
   } = teams;

   const styles = {
      header: {
         backgroundImage: `url(${strStadiumThumb})`,
         height: '70vh',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
      },
      content: {
         height: '100%',
         width: '100%',
         backgroundColor: 'rgba(0, 0, 0, 0.80)',
      },
   };

   return (
      <div>
         <div style={styles.header}>
            <div style={styles.content}>
               <img className="bannerOnImage" src={strTeamBadge} alt="" />
            </div>
         </div>
         <div className="bg-secondary pt-4">
            <div className="text-white team-info">
               <div className="mt-3  p-3">
                  <h1> {strTeam}</h1>
                  <p>
                     <FontAwesomeIcon icon={faCalendarAlt} /> Founded Year:
                     {'    '} {intFormedYear}
                  </p>
                  <p>
                     <FontAwesomeIcon icon={faFlag} /> Country: {'    '}
                     {strCountry}
                  </p>
                  <p>
                     <FontAwesomeIcon icon={faFutbol} /> Sport Type:
                     {'    '}
                     {strSport}
                  </p>
                  <p>
                     <FontAwesomeIcon icon={faVenusMars} /> Gender:
                     {'    '}
                     {strGender}
                  </p>
               </div>
               <div>
                  {strGender &&
                     (strGender?.toLowerCase() === 'male' ? (
                        <img className="image" src={male} alt="" />
                     ) : (
                        <img className="image" src={female} alt="" />
                     ))}
               </div>
            </div>
            <div className="mx-5 px-5 mt-3 pb-3">
               <h3>Detail Description:</h3>
               <small className="text-white">{strDescriptionEN}</small>
            </div>
         </div>
         <div>
            <h1 className="text-center m-3">
               <a
                  href={`https://${strFacebook}`}
                  target="_blank"
                  rel="noreferrer"
               >
                  <FontAwesomeIcon icon={faFacebook} />
               </a>{' '}
               <a
                  href={`https://${strYoutube}`}
                  target="_blank"
                  rel="noreferrer"
               >
                  <FontAwesomeIcon icon={faYoutube} />
               </a>{' '}
               <a
                  href={`https://${strTwitter}`}
                  target="_blank"
                  rel="noreferrer"
               >
                  <FontAwesomeIcon icon={faTwitter} />
               </a>
            </h1>
         </div>
      </div>
   );
};

export default Details;
