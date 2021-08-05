import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {navbarReducer} from "./navbar-reducer";

export const store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'Its my first post', likesCount: 20}
            ],
            newPostText: ''
        },

        dialogsPage: {

            dialogsData: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Dmitriy'},
                {id: 3, name: 'Pavel'},
                {id: 4, name: 'Searhey'},
                {id: 5, name: 'Mark'},
                {id: 6, name: 'Frank'},
                {id: 7, name: 'Bobby'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'},
                {id: 7, message: 'Yo'},
                {id: 8, message: 'Yo'},
                {id: 9, message: 'Yo'},
                {id: 10, message: 'Yo'},
            ],
            newMessagesText: ''
        },

        navbar: {
            friendsData: [
                {id:1, name: "Svetlana"},
                {id:2, name: "Mike"},
                {id:3, name: "Sofia"},
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // action - это обьект у которого будет как минимум type

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    },
}