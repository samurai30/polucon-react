export const USER_LIST = 'USER_LIST';
export const USER_ADD = 'USER_ADD';

export const userList = ()=>({
    type: USER_LIST,
    data: [{
        id:"1",
        firstName: 'suyog',
        lastName: 'mishal'
    },{
        id:"2",
        firstName: 'Domnic',
        lastName: 'Fernandes'
    }]
});

export const userAdd = () =>({
    type: USER_ADD,
    data: {
        id: Math.floor(Math.random() * 100+3),
        firstName: 'A new user',
        lastName: 'A new lastname'
    }
});

