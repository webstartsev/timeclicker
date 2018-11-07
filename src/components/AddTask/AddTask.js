import React from 'react';
import PropTypes from 'prop-types';
import './AddTask.css';

class AddTask extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    const { _title, _deadline } = this.refs;
    const { onSubmit } = this.props;
    e.preventDefault();
    if (_title.value !== '') {
      onSubmit(_title.value, _deadline.value);
      _title.value = '';
      _deadline.value = '';
    }
  }
  changeDeadline(e) {
    if (isNaN(Number.parseInt(e.target.value))) {
      e.target.value = '';
    }
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0, -1);
    }
  }

  render() {
    return (
      <form className="AddTask" onSubmit={this.submit}>
        <div className="AddTask-wrap">
          <input ref="_title" className="AddTask-input" />
          <input
            ref="_deadline"
            onChange={this.changeDeadline}
            className="AddTask-input AddTask-input_size_s"
          />
          <input type="submit" className="AddTask-btn" value="Добавить" />
        </div>
      </form>
    );
  }
}

AddTask.propTypes = {
  onSubmit: PropTypes.func
};

AddTask.defaultProps = {
  onSubmit: f => f
};

export default AddTask;
