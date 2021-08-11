import React from "react";
import s from "./users.module.css";
import * as axios from 'axios';
import userPhoto from '../../img/user-photo.png'

export class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        const pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <div className={s.pagesBox}>
                {pages.map( page => {
                   return <span className={this.props.currentPage === page && s.selectedPage}
                                onClick={ () => {this.onPageChanged(page)} }>{page}</span>
                })}
            </div>
            {
                this.props.users.map(user => <div key={user.id}>
                    <div className={s.postWrapper}>
                        <div className={s.leftBar}>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto} />
                            </div>
                            <div className={s.buttonDiv}>
                                { user.followed
                                    ? <button className={s.buttonUnfollow} onClick={() => {this.props.unfollow(user.id)}}>Unfollow</button>
                                    : <button className={s.buttonFollow} onClick={() => {this.props.follow(user.id)}}>Follow</button>
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

    }
}