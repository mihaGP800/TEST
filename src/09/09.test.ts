import {increaseAge, userType} from "./09";

test('should given new user age',()=>{
    let user: userType = {
        name: 'Miha',
        age: 32
    }

    let arrUsers: Array<userType> = [{
        name: 'Miha',
        age: 32
    },{
        name: 'Alinka',
        age: 27
    }]

    let manyUsers = arrUsers.unshift({
        name: 'Bob',
        age: 35
    })

    increaseAge(user)

    expect(arrUsers[0]).toStrictEqual({
        name: 'Bob',
        age: 35
    })
    expect(user.age).toBe(33)
})