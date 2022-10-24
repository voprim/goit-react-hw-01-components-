//import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.molule.css';

export const FriendList = ({friends}) => {
    return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
              key={id}
              isOnline={isOnline}
              avatar={avatar}
              name={name}
        />
      ))}
    </ul>
  );
 };