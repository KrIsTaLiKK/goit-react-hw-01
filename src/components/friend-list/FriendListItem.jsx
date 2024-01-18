import css from './FriendList.module.css';
import { GiPlainCircle } from 'react-icons/gi';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

export const FriendListItem = ({
  friend: {
    avatar = 'https://cdn-icons-png.flaticon.com/512/1998/1998597.png',
    name,
    isOnline,
  },
}) => {
  const statusClass = isOnline ? 'isOnline' : 'isOffline';
  const statusText = isOnline ? 'Online' : 'Offline';
  const statusIcon = isOnline ? (
    <IoIosArrowDropdownCircle className={statusClass} />
  ) : (
    <GiPlainCircle className={statusClass} />
  );

  // const defaultAvatar =
  //   'https://cdn-icons-png.flaticon.com/512/1998/1998597.png';
  // const friendAvatar = avatar || defaultAvatar;

  return (
    <div className={css.itemInfo}>
      <img
        className="avatar"
        src={avatar}
        alt={`Friend ${name}`}
        width="60"
        height="60"
      />
      <div className={css.iconNameWrap}>
        {statusIcon}
        <p className={css.friendName}>{name}</p>
      </div>
      <p className={statusClass}>{statusText}</p>
    </div>
  );
};
