import s from './Profile.module.css';
import CityImg from '../../../img/background_2.jpg';
export const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img src={CityImg} alt='#' className={s.img}/>
            </div>
            <div className={s.avatarAndDiscription}>
                avatar+description
            </div>
        </div>
    )
}