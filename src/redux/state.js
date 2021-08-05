const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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

        if(action.type === ADD_POST) {
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        }else if(action.type === ADD_MESSAGE) {
            const newMessage = {
                id: 11,
                message: this._state.dialogsPage.newMessagesText
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessagesText = "";
            this._callSubscriber(this._state);

        } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessagesText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}