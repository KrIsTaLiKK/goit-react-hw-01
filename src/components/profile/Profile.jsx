import css from './Profile.module.css';
import { FcLike } from 'react-icons/fc';
import { IoEyeSharp } from 'react-icons/io5';
import { FaPeopleGroup } from 'react-icons/fa6';

export const Profile = ({
  userData: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, likes, views },
  },
}) => {
  return (
    <div className={css.profileSection}>
      <h1 className={css.mainTitle}>PROFILE</h1>
      <div className={css.profileContainer}>
        <div className={css.descriptionWrap}>
          <div className={css.imgWrap}>
            <img
              src={avatar}
              alt={username}
              className={css.avatar}
              width="170"
              height="210"
            />
          </div>
          <div className={css.userInfoWrap}>
            <p className={css.nameDirection}>{username}</p>
            <p className={css.tagDirection}>@{tag}</p>
            <p className={css.lightText}>{location}</p>
          </div>
        </div>

        <ul className={css.statsWrap}>
          <li className={css.statsItem}>
            <span className={css.statsLabel}>Followers</span>
            <span className={css.statsValue}>{followers}</span>
            <div>
              <FaPeopleGroup className={css.followersIcon} size="36px" />
            </div>
          </li>
          <li className={css.statsItem}>
            <span className={css.statsLabel}>Views</span>
            <span className={css.statsValue}>{views}</span>
            <div>
              <IoEyeSharp size="36px" />
            </div>
          </li>
          <li className={css.statsItem}>
            <span className={css.statsLabel}>Likes</span>
            <span className={css.statsValue}>{likes}</span>
            <div>
              <FcLike className={css.rotateY} size="36px" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
