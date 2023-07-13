import css from "./FriendList.module.css"
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
       <ul className={css.friendList}>
            {
                friends.map(({ id, avatar, name, isOnline }) => (
                    <li className={css.item} key={id}>
                        <span className={`${css.status} ${isOnline ? css.true : css.false}`} >{isOnline}
                        </span>
                        <img className={css.avatar} src={avatar} alt="User avatar" width="108"/>
                        <p className={css.name}>{name}</p>
                    </li>
                ))
            }
                
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
}