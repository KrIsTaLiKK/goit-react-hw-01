import css from './FriendList.module.css';
import { GiPlainCircle } from 'react-icons/gi';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const statusClass = isOnline ? 'isOnline' : 'isOffline';

  return (
    <div className={css.itemInfo}>
      <img className="avatar" src={avatar} alt={name} width="60" height="60" />
      <div className={css.iconNameWrap}>
        <GiPlainCircle className={statusClass} />
        <p className={css.friendName}>{name}</p>
      </div>
      <p className={statusClass}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
