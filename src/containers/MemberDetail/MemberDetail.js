import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MemberTaskList from '../../components/MemberTaskList/MemberTaskList';
import { getTasks } from '../../store/actions/task';
import { getUser } from '../../store/actions/users';

class MemberDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: +this.props.match.params.id
    };
  }

  componentDidMount() {
    const { userId } = this.state;

    this.props.getTasks(userId);
    this.props.getUser(userId);
  }

  render() {
    const { user, tasks } = this.props;

    return user ? (
      <div className="MemberDetail">
        <h1 className="MemberDetail-name">{user.name}</h1>
        <div className="MemberDetail-main">
          <div className="MemberDetail-avatar">
            <img className="MemberDetail-img" src={user.avatar} alt={user.avatar} />
          </div>
          <div className="MemberDetail-info">Роль: {user.role}</div>
        </div>
        {tasks.length !== 0 && (
          <div className="MemberDetail-bottom">
            <h2>Список задач</h2>
            <div className="MemberDetail-tasks">
              <MemberTaskList tasks={tasks} />
            </div>
          </div>
        )}
      </div>
    ) : null;
  }
}

MemberDetail.propTypes = {
  user: PropTypes.object,
  tasks: PropTypes.array,
  getTasks: PropTypes.func,
  getUser: PropTypes.func,
  loading: PropTypes.bool
};

const putStateToProps = state => {
  return {
    user: state.users.user,
    tasks: state.task.tasks
  };
};

const mapDispatchToProps = dispath => {
  return {
    getTasks: userId => dispath(getTasks(userId)),
    getUser: userId => dispath(getUser(userId))
  };
};

export default connect(putStateToProps, mapDispatchToProps)(MemberDetail);
