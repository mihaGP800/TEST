export const moto = {
    0: {id: 123, name: 'Gilera'},
    1: {id: 231, name: 'BMW'},
    2: {id: 23, name: 'Honda'},
    3: {id: 12, name: 'Aprilia'},
}

type UserType = {
    [key: string]: { id: number, name: string }
}

export const users: UserType = {
    '1321': {id: 1321, name: 'Miha'},
    '22': {id: 22, name: 'Alina'},
    '214': {id: 214, name: 'Pol'},
    '546': {id: 546, name: 'Sah'},
}

let user = {id: 100500, name: 'Igor'}

users[user.id] = user   //user.id  автоматически поставляест toString()

delete users[user.id]

users[user.id].name = 'XAXA'
console.log(users[user.id].name)