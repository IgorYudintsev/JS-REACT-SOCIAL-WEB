import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/profile-reducer";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

// let AuthRedirectComponent = (props) => {
//     if (props.isAuth == false) return <Redirect to={'/Login'}/>
//     return <ProfileContainer {...props}/>
// }

let AuthRedirectComponent=withAuthRedirect(ProfileContainer)

// let mapStateToPropsForDirect = (state) => ({
//        isAuth: state.auth.isAuth
// })
// AuthRedirectComponent=connect(mapStateToPropsForDirect)(AuthRedirectComponent)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
 })

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);