import s from "./users.module.css";
import userPhoto from "../../img/user-photo.png";
import React from "react";
import {NavLink} from "react-router-dom";

export const Users = (props) => {

    const pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return(
        <div>
            <div className={s.pagesBox}>
                {pages.map( page => {
                    return <span key={page.id} className={props.currentPage === page && s.selectedPage}
                                 onClick={ () => {props.onPageChanged(page)} }>{page}</span>
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <div className={s.postWrapper}>
                        <div className={s.leftBar}>
                            <div>
                                <NavLink to={'/profile/' + user.id  }>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                         className={s.userPhoto} alt='#'/>
                                </NavLink>
                            </div>
                            <div className={s.buttonDiv}>
                                { user.followed
                                    ? <button className={s.buttonUnfollow} onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                                    : <button className={s.buttonFollow} onClick={() => {props.follow(user.id)}}>Follow</button>
                                }
                            </div>
                        </div>
                        <div className={s.body}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div className={s.rightBar}>
                            <div>{"user.location.city"}</div>
                            <div>{"user.location.country"}</div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    )
}