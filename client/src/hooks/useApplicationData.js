import {useEffect,useReducer} from 'react';
import dataReducer, { SET_USERS, SET_MATCHES } from '../reducers/dataReducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    matches: [],
    loading: true,
  });

  useEffect(() => {

    Promise.all([
      axios({ method: 'GET', url: '/api/users' }),
      axios({ method: 'GET', url: '/api/matches' })
    ])
      .then(all => {
        dispatch({ type: SET_USERS, users: all[0].data });
        dispatch({ type: SET_MATCHES, matches: all[1].data });
      })
      .catch((err) => console.log(err));
  }, []);

  function sendMatchData(score, user){
    axios.post("/api/matches", {
          match:{
            score: score,
            user_id: user.user.id,
            day_played: new Date()
            }
        } 
      )
      .then(res => dispatch({ type: SET_MATCHES, matches: res.data.match }))
      .catch(err => console.log("inside axios post", err.message))
  }

  return {
    state,
    dispatch,
    sendMatchData
  };
};

export default useApplicationData;