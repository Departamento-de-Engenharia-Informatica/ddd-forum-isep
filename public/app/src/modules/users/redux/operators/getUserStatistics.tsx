

import * as actionCreators from '../actionCreators'
import { usersService } from '../../services';

function getUserStatistics (username: string) {
  return async (dispatch: any, getState?: any) => {
    dispatch(actionCreators.gettingUserStatistics());
    try {
      const userStats = await usersService.getUserStatistics(username);
      console.log(userStats);
      dispatch(actionCreators.gettingUserStatisticsSuccess(userStats));
    } 
    catch (err) {
      let message = '';
      console.log(err);
      dispatch(actionCreators.gettingUserStatisticsFailure(message));
    }
  };
}

export { getUserStatistics };
