import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTask } from '../../store/actions';

import './AddTaskForm.css';

const AddTaskFrom = () => {
  let _title, _deadline;

  const submit = e => {
    e.preventDefault();
    if (_title.value !== '') {
      addTask(_title.value, _deadline.value);
      _title.value = '';
      _deadline.value = '';
    }
  };

  const changeDeadline = e => {
    if (isNaN(Number.parseInt(e.target.value))) {
      e.target.value = '';
    }
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0, -1);
    }
  };

  return (
    <form className="AddTask" onSubmit={submit}>
      <div className="AddTask-wrap">
        <input
          ref={input => (_title = input)}
          className="AddTask-input"
          placeholder="Название задачи"
        />
        <input
          ref={input => (_deadline = input)}
          onChange={changeDeadline}
          className="AddTask-input AddTask-input_size_s"
          placeholder="срок, ч."
        />
        <input type="submit" className="AddTask-btn" value="Добавить" />
      </div>
    </form>
  );
};

const putStateToProps = state => {
  return {
    title: state.title,
    deadline: state.deadline
  };
};

const putActionstoProps = dispatch => {
  return {
    addTask: bindActionCreators(addTask, dispatch)
  };
};

export default connect(
  putStateToProps,
  putActionstoProps
)(AddTaskFrom);
