import socketEvents from "../constants/socketEvents";

const prepareUsersList = (connections) => {
    return Array.from(connections).map(([key, value]) => ({
        id: key,
        userName: value.userName || '',
    }))
};

export const sendConnectedUsers = (connections, io) => {
    const users = prepareUsersList(connections);
    console.log('connected users', users);
    io.emit(socketEvents.USERS, users);
};
