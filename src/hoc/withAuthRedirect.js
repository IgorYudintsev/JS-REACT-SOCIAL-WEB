import React from 'react';
import Redirect from "../components/Dialogs/DialogsContainer";
import {connect} from "react-redux";

let mapStateToPropsForDirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect=(Component)=>{
    class RedirectComponent extends  React.Component{
        render(){
            if (this.props.isAuth == false) return <Redirect to={'/Login'}/>
            return <Component {...this.props}/>
        }
    }

   let ConnectedAuthRedirectComponent=connect(mapStateToPropsForDirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}
