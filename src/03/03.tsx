import {person, personType} from "../02/02";

export const addSkill = (person: personType, skill: string) => {
    return person.technologies.unshift({
        id: new Date().getTime(),
        title: 'TS'
    })
}

export function makePersonIsStudent(p: personType) {
    p.isStudent = true
}

export const personLiveCity = (person: personType, city: string) => {
    return person.address.city === city
}