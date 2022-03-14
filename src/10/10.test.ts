import {
    addCompany,
    addNewBook,
    BookType,
    byeNewLaptop,
    CompanyType,
    removeBook,
    replaceBooks,
    userType,
    UserWithlaptopType
} from "./10";
import exp from "constants";

export function lowerShallowAge(u: UserWithlaptopType, power: number) {
    const copyU = {...u, age: u.age / power}
    // copyU.age = u.age / power
    return copyU
}

export function lowerDeepAge(u: UserWithlaptopType, power: number) {
    const deepCopyU = {...u, age: u.age / power, address: {...u.address, title: 'Batumi'}}
    // copyU.age = u.age / power
    return deepCopyU
}

test('reference type test', () => {
    let user: UserWithlaptopType = {
        name: 'Miha',
        age: 32,
        address: {
            title: 'Minsk',
            house: 46
        },
        laptop: {
            title: 'acer'
        }
    }

    const shallowUser = lowerShallowAge(user, 2)
    const deepUser = lowerDeepAge(user, 2)

    expect(lowerShallowAge(user, 2)).toStrictEqual({
        name: 'Miha',
        age: 16,
        address: {
            title: 'Minsk',
            house: 46
        },
        laptop: {
            title: 'acer'
        }
    })
    expect(user.age).toBe(32)
    expect(shallowUser.age).toBe(16)

    expect(shallowUser.address.title).toBe('Minsk')
    expect(deepUser.address.title).toBe('Batumi')
    expect(user.address.title).toBe('Minsk')

    expect(user.laptop).toBe(deepUser.laptop)
    expect(user.address).not.toBe(deepUser.address)


})

test('upgrade user laptop to ROG', () => {
    let user: UserWithlaptopType & BookType = {
        name: 'Miha',
        age: 32,
        address: {
            title: 'Minsk',
            house: 46
        },
        laptop: {
            title: 'acer'
        },
        books: ['html', 'css', 'js', 'ts']
    }


    const coolUser = byeNewLaptop(user, 'ROG')

    const userWithNewBook = addNewBook(user, 'react')

    expect(coolUser.laptop.title).toBe('ROG')
    expect(user.laptop.title).toBe('acer')

    expect(user.address).toBe(coolUser.address)
    expect(user.laptop).not.toBe(coolUser.laptop)

    expect(user.books).not.toBe(userWithNewBook.books)
    expect(user.books).toStrictEqual(['html', 'css', 'js', 'ts'])
    expect(userWithNewBook.books).toStrictEqual(['html', 'css', 'js', 'ts', 'react'])


})

test('replace books', () => {
    let user: UserWithlaptopType & BookType = {
        name: 'Miha',
        age: 32,
        address: {
            title: 'Minsk',
            house: 46
        },
        laptop: {
            title: 'acer'
        },
        books: ['html', 'css', 'js', 'ts']
    }

    const newUser = replaceBooks(user, 'ts', 'react')

    expect(user.books[3]).toBe('ts')
    expect(newUser.books[3]).toBe('react')

    expect(newUser.books.length).toBe(4)
    expect(newUser.books).not.toBe(user.books)
})

test('remove books', () => {
    let user: UserWithlaptopType & BookType = {
        name: 'Miha',
        age: 32,
        address: {
            title: 'Minsk',
            house: 46
        },
        laptop: {
            title: 'acer'
        },
        books: ['html', 'css', 'js', 'ts']
    }

    const newUser = removeBook(user, 'js',)

    expect(user.books[2]).toBe('js')
    expect(newUser.books[2]).toBe('ts')

    expect(user.books.length).toBe(4)
    expect(newUser.books.length).toBe(3)
    expect(newUser.books).not.toBe(user.books)
})

test('add new company', () => {
    let user: UserWithlaptopType & CompanyType = {
        name: 'Miha',
        age: 32,
        address: {
            title: 'Minsk',
            house: 46
        },
        laptop: {
            title: 'acer'
        },
        companies: [{id: '1', title: 'zrdn'}, {id: '2', title: 'bmo'}]
    }

    const newUser = addCompany(user,'IT-company')

    expect(user.companies.length).toBe(2)
    expect(newUser.companies.length).toBe(3)

    expect(newUser.companies[2].title).toBe('IT-company')
})