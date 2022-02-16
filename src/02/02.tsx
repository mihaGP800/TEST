type technologiesType = {
    id: number
    title: string
}

type streetType = {
    number: number
    flat: number
}

type addressType = {
    country: string
    city: string
    street: streetType
}

export type personType = {
    firstName: string
    lastName: string
    age: number
    isStudent: boolean
    languages: Array<string>
    address: addressType
    technologies: Array<technologiesType>
}

export const person: personType = {
    firstName: 'Miha',
    lastName: 'Goroh',
    age: 32,
    isStudent: false,
    languages: ['ru', 'en', 'de'],
    address: {
        country: 'belarus',
        city: 'machuloshi',
        street: {
            number: 46,
            flat: 222
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 1,
            title: 'HTML'
        }
    ]
}
console.log(person.age)
console.log(person.technologies[2].title)