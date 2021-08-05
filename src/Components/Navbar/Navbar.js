import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";

export const Navbar = (props) => {
    return(
        <ul className={s.nav}>
            <li className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </li>
            <li className={`${s.item} ${s.settings}`}>
                <NavLink to="settings" activeClassName={s.active}>Settings</NavLink>
            </li>
            <Friends state={props.state} />
        </ul>
    )
}