import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxFieldLengthCreator, requiredFieldValidationForm } from '../../utilits/validation'
import { Input } from '../common/FormsControls/FormsControls'
import {connect} from 'react-redux'
import {loginThunkCreator} from '../../redux/auth-reduser'
import { Redirect } from 'react-router-dom'
import el from '../../components/common/FormsControls/FormsControls.module.css'

let maxLength30 = maxFieldLengthCreator(30)

const LoginForm = (props) => { 
return( 
<form  onSubmit={props.handleSubmit} className={el.loginForm}>

<div> <Field placeholder={"Email"} name={"email"} component={Input} validate={[requiredFieldValidationForm, maxLength30]}/> </div>
<div> <Field placeholder={"Password"} type={"password"} name={"password"} component={Input} validate={[requiredFieldValidationForm, maxLength30]}/></div>
<div> <Field name={"rememberMe"} type={"checkbox"} component={"input"}/>remember Me</div>
<div> <button> button </button> </div>
{props.captchaUrl && <img src={props.captchaUrl} /> }
{props.captchaUrl && <div> <Field placeholder={"sumbols"} name={"captcha"} component={Input} validate={[requiredFieldValidationForm, maxLength30]}/> </div> }

<div className={el.authError}> {props.error}</div>
</form>
)
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
const onSubmit = (formData) =>{

 props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha)
        console.log(formData)
}
if(props.isAuth)return <Redirect to="/main"/> 

return(
<div>    

<h1>LOGIN!!</h1>

<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />

</div>
)
}
const mapStateToProps = (state) => ({
isAuth: state.auth.isAuth,
captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps , {loginThunkCreator}) (Login)