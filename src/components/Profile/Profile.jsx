import { ReactPropTypes } from "react"
import css from "./Profile.module.css"


export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
    <div className={css.profile}>
        <div className={css.description}>
            <img
                src={avatar}
                alt={username}
                className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
            <li className={css.item}>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{followers}</span>
            </li>
            <li className={css.item}>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{views}</span>
            </li>
            <li className={css.item}>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{likes}</span>
            </li>
        </ul>
        </div>
    )
}