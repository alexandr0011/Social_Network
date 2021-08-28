import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";

export const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
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
                <Field placeholder="Login"
                       validate={[requiredField]}
                       name={'login'}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder="Password"
                       validate={[requiredField]}
                       name={'password'}
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