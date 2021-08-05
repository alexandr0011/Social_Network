import s from './Profile.module.css'

export const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img className={s.profileImg} src='https://st.depositphotos.com/2251265/4665/i/600/depositphotos_46659105-stock-photo-modern-city-view.jpg'/>
            </div>
            <div className={s.avatarAndDiscription}>
                avatar+description
            </div>
        </div>
    )
}