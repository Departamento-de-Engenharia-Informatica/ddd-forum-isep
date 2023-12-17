
import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FullPageLoader } from '../shared/components/loader';
import { UsersState } from '../modules/users/redux/states';
import { ForumState } from '../modules/forum/redux/states';
import * as forumOperators from '../modules/forum/redux/operators'
import * as usersOperators from '../modules/users/redux/operators'
import { UserStatsDTO } from '../modules/users/dtos/userStatsDTO';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withLogoutHandling from '../modules/users/hocs/withLogoutHandling';
import { UserStats } from '../modules/users/models/userStats';
import { Table } from 'react-bootstrap';
import { FaUser, FaTrophy, FaNewspaper } from 'react-icons/fa';

interface MemberPageProps extends usersOperators.IUserOperators, forumOperators.IForumOperations {
  users: UsersState;
  forum: ForumState;
}

interface MemberPageState {
  memberData: UserStatsDTO;
  loading: boolean;
}

export class MemberPage extends Component<MemberPageProps, MemberPageState> {
  constructor(props: MemberPageProps) {
    super(props);
  }

  getUserName () {
    if (typeof window !== 'undefined') {
      var pathname = window.location.pathname;
      var username = pathname.substring(pathname.lastIndexOf("/") + 1);
      return username;
    } else {
      return "";
    }  
  }

  getUserStats (): void {
    const username = this.getUserName();
    this.props.getUserStatistics(username);
  }

  getUserStatsWithBestScore (): void {
    this.props.getUserStatisticsWithBestScore();
  }

  getUserStatsWithMostPosts (): void {
    this.props.getUserStatisticsWithMostPosts();
  }

  async componentDidMount() {
    this.getUserStats();
    this.getUserStatsWithBestScore();
    this.getUserStatsWithMostPosts();
  }

  render() {
    const userName = this.getUserName();
    const userStats = this.props.users.userStats as UserStats;
    const userStatsWithBestScore = this.props.users.userStatsWithBestScore as UserStats;
    const userStatsWithMostPosts = this.props.users.userStatsWithMostPosts as UserStats;
  
    if (this.props.users.isFetchingUserStats) {
      return <FullPageLoader />;
    }
  
    return (
      <div className="profile-container">
        <Link to="/" className="back-button">
        &lt; Back
      </Link>
        <h1 className="profile-title">
          <FaUser /> Member
        </h1>
        <h2 className="profile-username">{userName}</h2>
  
        {/* Display userStats information */}
        {userStats ? (
          <div className="profile-details">
            <p>
              <strong>
                <FaUser /> Username:
              </strong>{' '}
              {userStats.username}
            </p>
            <p>
              <strong>
                <FaTrophy /> Reputation:
              </strong>{' '}
              {userStats.reputation}
            </p>
            <p>
              <strong>
                <FaNewspaper /> Number of Published Posts:
              </strong>{' '}
              {userStats.numberOfPublishedPosts}
            </p>
            <p>
              <strong>
                <FaNewspaper /> Number of Commented Posts:
              </strong>{' '}
              {userStats.numberOfCommentedPosts}
            </p>
          </div>
        ) : (
          <p className="error-message">Error loading member information.</p>
        )}
  
        {/* Compare userStatsWithMostPosts and userStatsWithBestScore */}
        {userStatsWithMostPosts && userStatsWithBestScore && (
          <div className="profile-comparison">
            <h3>Comparison</h3>
            <Table bordered striped style={{
            border: '2px solid #ddd', // Set border color
            borderRadius: '5px', // Add rounded corners
            width: '100%', // Set table width to 100%
            marginTop: '10px', // Add some top margin
          }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ddd' }}>Attribute</th>
                  <th style={{ border: '1px solid #ddd' }}>User</th>
                  <th style={{ border: '1px solid #ddd' }}>Best Scored User</th>
                  <th style={{ border: '1px solid #ddd' }}>Most Posts User</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(userStats).map(([key, value], index) => (
                  <tr key={key} style={{ background: index % 2 === 0 ? '#f8f9fa' : 'white' }}>
                    <td style={{ borderRight: '1px solid #ddd' }}>{this.formatAttributeName(key)}</td>
                    <td style={{ borderRight: '1px solid #ddd' }}>{value}</td>
                    <td style={{ borderRight: '1px solid #ddd' }}>{userStatsWithBestScore[key as keyof UserStats]}</td>
                    <td>{userStatsWithMostPosts[key as keyof UserStats]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    );
  }

  // Helper function to format attribute names
  formatAttributeName = (name: string) => {
    // Convert camelCase to "Title Case"
    return name.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
      return str.toUpperCase();
    });
  };
}

function mapStateToProps ({ users, forum }: { users: UsersState, forum: ForumState }) {
  return {
    users,
    forum
  };
}

function mapActionCreatorsToProps(dispatch: any) {
  return bindActionCreators(
    {
      ...usersOperators,
      ...forumOperators
    }, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(
  withLogoutHandling(MemberPage)
);