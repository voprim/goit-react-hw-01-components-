import PropTypes from 'prop-types';
import css from './SocialProfile.module.css';

export const SocialProfile = ({ username, tag, location, avatar, stats }) => {
    return <div className={css.profile}>
        <div className={css.description}>
            <img
                src={avatar}
                alt={username}
                className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
};

SocialProfile.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
      }),
    }),
  ),
};