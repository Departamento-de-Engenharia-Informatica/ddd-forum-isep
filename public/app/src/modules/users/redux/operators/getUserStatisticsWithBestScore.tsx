

import * as actionCreators from '../actionCreators'
import { usersService } from '../../services';

function getUserStatisticsWithBestScore () {
  return async (dispatch: any, getState?: any) => {
    dispatch(actionCreators.gettingUserStatisticsWithBestScore());
    try {
      const userStats = await usersService.getUserStatisticsWithBestScore();
      console.log(userStats);
      dispatch(actionCreators.gettingUserStatisticsWithBestScoreSuccess(userStats));
    } 
    catch (err) {
      let message = '';
      console.log(err);
      dispatch(actionCreators.gettingUserStatisticsWithBestScoreFailure(message));
    }
  };
}

export { getUserStatisticsWithBestScore };
