import React from 'react';
import PropTypes from 'prop-types';
import './AddTask.css';

class AddTask extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    const { _title } = this.refs;
    const { onSubmit } = this.props;
    e.preventDefault();
    if (_title.value !== '') {
      onSubmit(_title.value);
      _title.value = '';
    }
  }

  render() {
    return (
      <form className="AddTask" onSubmit={this.submit}>
        <input ref="_title" className="AddTask-input" />
        <input type="submit" value="Добавить" />
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
