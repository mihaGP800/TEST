import {personType} from "../02/02";
import {addSkill, makePersonIsStudent, personLiveCity} from "./03";

let person: personType

beforeEach(() => {
    person = {
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
})

test('new tech would be added to person', () => {
    expect(person.technologies.length).toBe(3)

    addSkill(person, 'TS')

    expect(person.technologies.length).toBe(4)
    expect(person.technologies[0].title).toBe('TS')
    expect(person.technologies[0].id).toBeDefined()
})

test('status isStudent person would be true', ()=>{
    expect(person.isStudent).toBe(false)

    makePersonIsStudent(person)

    expect(person.isStudent).toBe(true)
})

test('does person live in minsk', ()=>{
    expect(person.address.street.flat).toBeDefined()
    expect(person.address.street.flat).toBe(222)

    let res1 = personLiveCity(person, 'minsk')
    let res2 = personLiveCity(person, 'machuloshi')

    expect(res1).toBe(false)
    expect(res2).toBe(true)
})

