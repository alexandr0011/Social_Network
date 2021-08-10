import s from './users.module.css'

export const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {   id: 1,
                photoUrl: 'https://stuki-druki.com/biofoto3/dolph-lundgren-01.jpg',
                followed: false,
                fullName: 'Alex',
                status: 'Hey iam here',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            },
            {   id: 2,
                photoUrl: 'https://stuki-druki.com/biofoto3/dolph-lundgren-01.jpg',
                followed: true,
                fullName: 'Dmitry',
                status: 'Yo',
                location: {
                    city: 'Moscow',
                    country: 'Russia'
                }
            },
            {   id: 3,
                photoUrl: 'https://stuki-druki.com/biofoto3/dolph-lundgren-01.jpg',
                followed: false,
                fullName: 'Sofia',
                status: 'Hello',
                location: {
                    city: 'London',
                    country: 'England'
                }
            },
            {   id: 4,
                photoUrl: 'https://stuki-druki.com/biofoto3/dolph-lundgren-01.jpg',
                followed: true,
                fullName: 'Mark',
                status: 'Iam here',
                location: {
                    city: 'Kiev',
                    country: 'Ukraine'
                }
            },
            {   id: 5,
                photoUrl: 'https://stuki-druki.com/biofoto3/dolph-lundgren-01.jpg',
                followed: true,
                fullName: 'David',
                status: 'Hi',
                location: {
                    city: 'Rome',
                    country: 'Italian'
                }
            },
        ])
    }
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <div className={s.postWrapper}>
                        <div className={s.leftBar}>
                            <div>
                                <img src={user.photoUrl} className={s.userPhoto} />
                            </div>
                            <div className={s.buttonDiv}>
                                { user.followed
                                    ? <button className={s.buttonUnfollow} onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                                    : <button className={s.buttonFollow} onClick={() => {props.follow(user.id)}}>Follow</button>
                                }
                            </div>
                        </div>
                        <div className={s.body}>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </div>
                        <div className={s.rightBar}>
                            <div>{user.location.city}</div>
                            <div>{user.location.country}</div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    )
}