import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.scss";

const FriendListItem = (props) => {
  let { avatar, name, isOnline } = props;

  return (
    <li className={styles.item}>
      <span
        className={[
          styles.status,
          isOnline ? styles.statusOn : styles.statusOff,
        ].join(" ")}
      ></span>
      <img className={styles.avatar} src={avatar} alt="avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

// ================================
const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map((friend) => (
        <FriendListItem {...friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendList;
