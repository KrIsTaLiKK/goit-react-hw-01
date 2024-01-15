import css from './FriendList.module.css';
import { GiPlainCircle } from 'react-icons/gi';
import clsx from 'clsx';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div className={css.itemInfo}>
      <img className="avatar" src={avatar} alt={name} width="60" height="60" />
      <div className={css.iconNameWrap}>
        <GiPlainCircle
          className={clsx({
            [css.isOnline]: isOnline,
            [css.isOffline]: !isOnline,
          })}
        />
        <p className={css.friendName}>{name}</p>
      </div>
      <p
        className={clsx({
          [css.isOnline]: isOnline,
          [css.isOffline]: !isOnline,
        })}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
