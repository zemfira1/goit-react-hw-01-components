import css from "./FriendList.module.css"
import PropTypes from 'prop-types';

export const FriendList = ({friends, avatar, name, isOnline}) => {
    return (
       <ul className={css.friendList}>
            {
                friends.map( friend => (
                    <li className={css.item} key={friend.id}>
                        <span className={css.status} >{isOnline = friend.isOnline}
                            {/* ? style=backgroundColor: '#34eb4f'    
                            : style=backgroundColor: '#f24441'  */}
                        </span>
                        <img className={css.avatar} src={avatar=friend.avatar} alt="User avatar" width="108"/>
                        <p className={css.name}>{name=friend.name}</p>
                    </li>
                ))
            }
                
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}