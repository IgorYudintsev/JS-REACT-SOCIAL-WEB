import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);

        // this.props.setCurrentPage(pageNumber);
        // usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items);
        // })
    }

    render() {
        return (
            <>

                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    // toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </>

        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow, unfollow,
    setCurrentPage,
    toggleFollowingProgress, getUsers
})(UsersContainer);