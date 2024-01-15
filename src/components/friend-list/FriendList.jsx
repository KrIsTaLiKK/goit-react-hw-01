import { SecondaryTitle } from '../secondary-title/SecondaryTitle';
import { FriendListItem } from './FriendListItem';
import clsx from 'clsx';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.friendListSection}>
      <SecondaryTitle>Friends</SecondaryTitle>
      <ul className={css.friendList}>
        {friends.map(friend => {
          return (
            <li
              className={clsx(css.friendListItem, {
                [css.isOnline]: friend.isOnline,
                [css.isOffline]: !friend.isOnline,
              })}
              key={friend.id}
            >
              <FriendListItem friend={friend} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
