const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {

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
        newMessagesText: '',
    };

export const dialogsReducer = (state = initialState, action) => {

    const stateCopy = {...state};

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 11,
                message: state.newMessagesText,
            };
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessagesText = '';
            return stateCopy;

        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessagesText = action.newText;
            return stateCopy;

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