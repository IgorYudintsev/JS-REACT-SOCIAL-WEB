import React from 'react';
import {connect} from "react-redux";
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/users-reducer";
import * as axios from "axios";
import {Users} from "./Users";


class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            console.log(response)
        })
    }

    onPageChange = (pageNUmber) => {
        this.props.setCurrentPage(pageNUmber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNUmber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items);
        })
    }

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />

        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
      follow:(userID)=>{
          dispatch(followAC(userID))
      },
        unfollow:(userID)=>{
            dispatch(unfollowAC(userID))
        },
        setUser:(users)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);