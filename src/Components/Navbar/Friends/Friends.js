import s from "./Friends.module.css"

export const Friends = (props) => {

    const friendsElements = props.state.friendsData.map((item) => {
        return <div>
                    <div className={s.friendsPhoto} />
                    <p>{item.name}</p>
                </div>
    })

    return(
        <div className={s.friendsComponent}>
            <h3>Friends</h3>
            <div className={s.friendBlock}>
                {friendsElements}
            </div>
        </div>
    )
}