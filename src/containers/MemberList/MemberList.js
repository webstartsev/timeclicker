import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MemberShort from '../../components/MemberShort/MemberShort';
import { getUsers } from '../../store/actions/users';

class MemberList extends Component {
  componentDidMount() {
    this.props.getMembers();
  }

  render() {
    const { users } = this.props;

    return (
      <div className="MemberList">
        <h1 className="MemberList-name">Список пользователей</h1>
        {Object.keys(users).map(id => (
          <div key={id} className="MemberList-item">
            <MemberShort user={users[id]} />
          </div>
        ))}
      </div>
    );
  }
}

MemberList.propTypes = {
  users: PropTypes.array,
  getMembers: PropTypes.func
};

const putStateToProps = state => {
  return {
    users: state.users.users
  };
};
const mapDispatchToProps = dispath => {
  return {
    getMembers: () => dispath(getUsers())
  };
};

export default connect(putStateToProps, mapDispatchToProps)(MemberList);
