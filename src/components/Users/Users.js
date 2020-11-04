import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            console.log(response)
        })
    }

    onPageChange=(pageNUmber)=>{
        this.props.setCurrentPage(pageNUmber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNUmber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items);
        })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
            let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={styles.pagesBlock}>
                    {pages.map(p =>
                        <span className={this.props.currentPage === p ? styles.selectedPage : styles.pages}
                              onClick={(event) => {this.onPageChange(p)}}>{p}</span>
                    )}
                </div>
                {this.props.users.map(m =>
                    <div key={m.id}>
            <span>
                <div>
                    <img
                        src={m.photos.small != null ? m.photos.small : 'https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png'}
                        className={styles.picture}/>
                </div>
                <div>
                    {m.followed
                        ? <button onClick={() => this.props.unfollow(m.id)}
                                  className={styles.margForBtn}>UNFollow</button>
                        : <button onClick={() => this.props.follow(m.id)} className={styles.margForBtn}>Follow</button>
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
}

export default Users;