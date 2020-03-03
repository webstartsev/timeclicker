import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskHistory from '../../containers/TaskHistory/TaskHistory';

import { getTask } from '../../store/actions/task';
import { getUser } from '../../store/actions/users';

import { secToTime } from '../../helpers/function';

class TaskDetail extends Component {
  componentDidMount() {
    console.log('this.props.match.params: ', this.props.match.params);
    this.props.getTask(this.props.match.params.id);
    // this.props.getTask(this.props.match.params.id);
  }

  render() {
    const { task, history } = this.props;
    return null;
    return task ? (
      <div className="TaskDetail">
        <div className="TaskDetail-main">
          <div className="TaskDetail-detail">
            <h1 className="TaskDetail-title">{task.title}</h1>
            <div className="TaskDetail-description">{task.description}</div>
          </div>
          <div className="TaskDetail-info">
            {task.user !== null && (
              <div className="TaskDetail-prop TaskDetail-prop_type_user">
                Исполнитель: <span className="TaskDetail-user">{task.user.name}</span>
              </div>
            )}
            <div className="TaskDetail-prop TaskDetail-prop_type_status">Статус: {task.status}</div>
            <div className="TaskDetail-prop TaskDetail-prop_type_time">
              Время по задаче: {task.time}
            </div>
            <div className="TaskDetail-prop TaskDetail-prop_type_diff">Разница: {task.diff}</div>
            <div className="TaskDetail-prop TaskDetail-prop_type_deadline">
              Дейдлайн: {task.deadline}
            </div>
          </div>
        </div>
        <div className="TaskDetail-bottom">
          {history.length !== 0 && (
            <div className="TaskDetail-history">
              <h3 className="TaskDetail-sectionTitle">История изменений</h3>
              {history.map((item, index) => (
                <TaskHistory key={index} item={item} deadline={task.deadline} />
              ))}
            </div>
          )}
        </div>
      </div>
    ) : null;
  }
}

TaskDetail.propTypes = {
  task: PropTypes.object,
  history: PropTypes.array,
  getTask: PropTypes.func
};

const putStateToProps = (state, props) => {
  const task = state.task.task;
  const history = state.task.taskHistory;
  const id = props.match.params.id;

  return {
    task,
    history: history[id]
  };
};

const putActionstoProps = dispatch => {
  return {
    // addTask: bindActionCreators(addTask, dispatch)
    getTask: taskId => dispatch(getTask(taskId)),
    getUser: userId => dispatch(getUser(userId))
  };
};

export default connect(putStateToProps, putActionstoProps)(TaskDetail);
