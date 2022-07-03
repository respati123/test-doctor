import Card from 'components/card';
// import useLoginModel from './Login.model';
import styles from '../login/Login.module.scss'
import useRegisterModel from './Register.model';

const Register = () => {

    const { loading, data, setEmail, error, email, password, setPassword, onClickLogin, onRegister} = useRegisterModel()

    const invalidClass = error && styles.invalid;
    return (
        <div className={styles.login}>
            <Card>
                <form noValidate className={styles.login__form} onSubmit={onRegister}>
                    <div className={`${styles.login__form_input} `}>
                        <input className={`${styles.form_input} ${invalidClass}`} type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div> 
                    <div className={styles.login__form_input}>
                        <input className={`${styles.form_input} ${invalidClass}`} type="password"   placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}/>
                    </div>  
                    <input type='submit' value="Register" className={styles.button_submit} />  
                    {data && <p>{data.message}</p>}
                    <button className={styles.button_register} onClick={onClickLogin}>Login</button>
                </form>
            </Card>
        </div>
    )
}

export default Register;