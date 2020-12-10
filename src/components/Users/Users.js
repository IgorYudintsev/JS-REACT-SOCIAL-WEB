import React from 'react';
import styles from './Users.module.css'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

export const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={styles.pagesBlock}>
                {pages.map(p =>
                    <span className={props.currentPage === p ? styles.selectedPage : styles.pages}
                          onClick={(event) => {
                              props.onPageChange(p)
                          }}>{p}</span>
                )}
            </div>
            {props.users.map(m =>
                <div key={m.id}>
            <span>
                <div>
                   <NavLink to={'/profile/' + m.id}>
                        <img src={m.photos.small != null
                            ? m.photos.small
                            : 'https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png'}
                             className={styles.picture}/>
                    </NavLink>
                </div>
                <div>
                    {m.followed
                        ? <button
                            disabled={props.followingInProgress.some(id => id === m.id)}
                            onClick={() => {
                                props.unfollow(m.id);
                            }} className={styles.margForBtn}>UNFollow</button>
                        : <button
                            disabled={props.followingInProgress.some(id => id === m.id)}
                            onClick={() => {
                                props.follow(m.id)
                            }} className={styles.margForBtn}>Follow</button>
                    }
                </div>
            </span>
                    <span>
                        <div className={styles.marg}>{m.name}</div>
                        <div className={styles.marg}>{m.status}</div>

                    </span>
                    <span>
                        <div className={styles.marg}>{"m.location.country"}</div><div
                        className={styles.marg}>{"m.location.city"}</div>
                    </span>
                </div>)}
        </div>
    )
}