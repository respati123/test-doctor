import Card from 'components/card';
import useLoginModel from './Login.model';
import styles from './Login.module.scss'

const Login = () => {

    const { loading, data, setEmail, error, email, password, setPassword, onLogin, onClickRegister} = useLoginModel()

    const invalidClass = error && styles.invalid;
    return (
        <div className={styles.login}>
            <Card>
                <form noValidate className={styles.login__form} onSubmit={onLogin}>
                    <div className={`${styles.login__form_input} `}>
                        <input className={`${styles.form_input} ${invalidClass}`} value={email} type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    </div> 
                    <div className={styles.login__form_input}>
                        <input className={`${styles.form_input} ${invalidClass}`} type="password" value={password}  placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>  
                    <input type='submit' value="Login" className={styles.button_submit} />  
                    <button className={styles.button_register} onClick={onClickRegister}>Register</button>
                </form>
            </Card>
        </div>
    )
}

export default Login;