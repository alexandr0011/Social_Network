import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

export const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return(
        <div>
            <h1>LOGIN PAGE</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email"
                       validate={[requiredField]}
                       name={'email'}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder="Password"
                       validate={[requiredField]}
                       name={'password'}
                       type={'password'}
                       component={Input}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export const LoginContainer = connect(mapStateToProps, {loginThunkCreator}) (Login)