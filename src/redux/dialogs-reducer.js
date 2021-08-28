const ADD_MESSAGE = 'ADD-MESSAGE';

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
    };

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {
                    id: 11,
                    message: action.newMessageBody,
                }],
            };

        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody
    }
}