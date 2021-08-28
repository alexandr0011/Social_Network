import s from './Header.module.css';
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return(
        <header className={s.header}>
            <img src="https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Ghost-128.png"/>
            <div className={s.loginBlock}>
                { props.isAuth
                    ? <div>{props.login} - <button onClick={props.logoutThunkCreator} >Log out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}