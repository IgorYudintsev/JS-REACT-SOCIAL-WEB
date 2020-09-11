const updateNewMessageBody = 'update-New-Message-Body';
const SendMessage = 'Send-Message';

let initialState= {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yoo'},
        {id: 4, message: 'How are you?'},
        {id: 5, message: 'Yoo'},
    ],
    dialogs: [
        {id: 1, name: 'Dimach'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Olga'},
        {id: 5, name: 'Nadzeika'},
    ],
    newMessageBody: ''
}

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case updateNewMessageBody:
            state.newMessageBody = action.body;
            return state
        case SendMessage:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export let sendMessageCreator = () => {
    return {
        type: SendMessage
    }
}
export let updateNewMessageBodyCreator = (body) => {
    return {
        type: updateNewMessageBody,
        body: body
    }
}

export default dialogsReducer;