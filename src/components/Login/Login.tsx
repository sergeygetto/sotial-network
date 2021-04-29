import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { maxFieldLengthCreator, requiredFieldValidationForm } from '../../utilits/validation'
import { Input } from '../common/FormsControls/FormsControls'
import {connect} from 'react-redux'
import {loginThunkCreator} from '../../redux/auth-reduser'
import { Redirect } from 'react-router-dom'
import el from '../../components/common/FormsControls/FormsControls.module.css'
import { AppStateType } from '../../redux/redux-store'

let maxLength30 = maxFieldLengthCreator(30)

type OwnTypeProps = {
    captchaUrl: string
}

const LoginForm: React.FC<FormDataType & InjectedFormProps<OwnTypeProps, FormDataType, string>> = (props:any) => { 
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

const LoginReduxForm = reduxForm<OwnTypeProps , FormDataType>({
    form: 'login'

})(LoginForm)

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    loginThunkCreator: ( email: string, password: string, rememberMe: boolean, captcha: string)=> void
    
}

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
    
}

const Login:React.FC <MapDispatchPropsType & MapStatePropsType> = (props) => {
const onSubmit = (formData:FormDataType) =>{

 props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha)
        console.log(formData)
}
if(props.isAuth)return <Redirect to="/main"/> 

return(
<div>    

<h1>LOGIN!!</h1>
{/* @ts-ignore */}
<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />

</div>
)
}
const mapStateToProps = (state: AppStateType):MapStatePropsType => ({
isAuth: state.auth.isAuth,
captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps , {loginThunkCreator}) (Login)