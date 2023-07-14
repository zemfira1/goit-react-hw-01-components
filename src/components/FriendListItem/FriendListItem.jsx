import css from "./FriendListItem.module.css"
import PropTypes from 'prop-types';

import { Item, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline }) => {
    return (
        <Item>
            <span className={`${css.status} ${isOnline ? css.true : css.false}`} >{isOnline}</span>
            <Avatar src={avatar} alt="User avatar" width="108"/>
            <Name>{name}</Name>
        </Item>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}