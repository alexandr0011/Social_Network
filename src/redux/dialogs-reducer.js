const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state, action) => {

    if(action.type === ADD_MESSAGE) {
        const newMessage = {
            id: 11,
            message: state.newMessagesText
        };
        state.messagesData.push(newMessage);
        state.newMessagesText = "";

    } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessagesText = action.newText;
    }

    return state;
}