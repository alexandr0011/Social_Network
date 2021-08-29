import s from './Profile.module.css';
import CityImg from '../../../img/background_2.jpg';
import {Preloader} from "../../common/Preloader/Preloader";
import profilePhoto from './../../../img/user-photo02.jpg'
import {ProfileStatusWithHoc} from "./ProfileStatusWithHocs";

export const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return(
        <div>
            <div>
                <img src={CityImg} alt='#' className={s.img}/>
            </div>
            <div className={s.avatarAndDiscription}>
                <div>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : profilePhoto} />
                </div>
                <div>
                    USER
                    <div>{props.profile.fullName}</div>
                    <div>{props.profile.aboutMe}</div>
                    <ProfileStatusWithHoc status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div>
                    CONTACTS
                    <div>{props.profile.contacts.twitter}</div>
                </div>
            </div>
        </div>
    )
}