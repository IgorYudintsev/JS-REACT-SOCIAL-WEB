import React from 'react';
import {Field,reduxForm} from "redux-form";

export const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    {/*<input placeholder={'Login'}/>*/}
                    <Field placeholder={'Login'} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'}  component={'input'}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}
const LoginReduxForm=reduxForm({form:'login'})(LoginForm);

export const Login = () => {
    const onSubmit=(formData)=>{
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
