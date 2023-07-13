
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem'

import { Friends } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
       <Friends>
            {
                friends.map(({ id, avatar, name, isOnline }) => (
                    <FriendListItem
                    key={id}
                    avatar = { avatar }
                    name={name}
                    isOnline={isOnline} />
                ))
            }
                
        </Friends>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
}