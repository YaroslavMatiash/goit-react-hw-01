import css from './Profile.module.css'

function Profile({ name, tag, location, image, stats }) {
   return (
      <div className={css.profileCard}>
 <div className={css.personalInfo}>
      <img
      className={css.avatar}
 src={image}
      alt={name}
    />
    <p className={css.userName}>{name}</p>
    <p className={css.secondaryInfo}>@{tag}</p>
    <p className={css.secondaryInfo}>{location}</p>
  </div>

  <ul className={css.statsList}>
    <li className={css.statsListItem}>
      <span>Followers</span>
      <span className={css.statsCount}>{stats.followers}</span>
    </li>
    <li className={css.statsListItem}>
      <span>Views</span>
      <span className={css.statsCount}>{stats.views}</span>
    </li>
    <li className={css.statsListItem}>
      <span>Likes</span>
      <span className={css.statsCount}>{stats.likes}</span>
    </li>
  </ul>
</div>
   )
}

export default Profile;