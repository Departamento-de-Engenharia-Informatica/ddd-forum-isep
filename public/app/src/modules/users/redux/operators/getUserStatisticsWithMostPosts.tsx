

import * as actionCreators from '../actionCreators'
import { usersService } from '../../services';

function getUserStatisticsWithMostPosts () {
  return async (dispatch: any, getState?: any) => {
    dispatch(actionCreators.gettingUserStatisticsWithMostPosts());
    try {
      const userStats = await usersService.getUserStatisticsWithMostPosts();
      console.log(userStats);
      dispatch(actionCreators.gettingUserStatisticsWithMostPostsSuccess(userStats));
    } 
    catch (err) {
      let message = '';
      console.log(err);
      dispatch(actionCreators.gettingUserStatisticsWithMostPostsFailure(message));
    }
  };
}

export { getUserStatisticsWithMostPosts };
