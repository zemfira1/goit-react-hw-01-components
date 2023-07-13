import css from "./FriendListItem.module.css"
import PropTypes from 'prop-types';

export const FriendListItem = ({avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
            <span className={`${css.status} ${isOnline ? css.true : css.false}`} >{isOnline}
            </span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="108"/>
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}