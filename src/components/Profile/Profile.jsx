

import PropTypes from 'prop-types';

import {ProfileSecton, Description, Avatar, Name, Tag, Location, Stats, Item, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
    <ProfileSecton>
        <Description>
            <Avatar
                src={avatar}
                alt={username}
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>

        <Stats>
            <Item>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
            </Item>
            <Item>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
            </Item>
            <Item>
                <Label>Likes</Label>
                <Quantity>{likes}</Quantity>
            </Item>
        </Stats>
        </ProfileSecton>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}