const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 11,
                message: state.newMessagesText
            };
            state.messagesData.push(newMessage);
            state.newMessagesText = "";
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessagesText = action.newText;
            return state;

        default:
            return state;
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