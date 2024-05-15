import css from '../FriendList/FriendList.module.css'
import FriendListItem from './FriendListItem/FriendListItem'

function FriendList({friends}) {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem data={friend} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;