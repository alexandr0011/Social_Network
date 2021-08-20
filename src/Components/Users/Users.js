import s from "./users.module.css";
import userPhoto from "../../img/user-photo.png";
import React from "react";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                                    ? <button className={s.buttonUnfollow} onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '77d91c86-6c08-4117-bdb8-da736f5c093e'
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(user.id);
                                                }
                                            });

                                    }}>Unfollow</button>
                                    : <button className={s.buttonFollow} onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '77d91c86-6c08-4117-bdb8-da736f5c093e'
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(user.id);
                                                }
                                            });

                                    }}>Follow</button>
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