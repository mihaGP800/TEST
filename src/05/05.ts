import React from "react";
import {isNumber} from "util";

type  streetType = {
    title: string
}

type addressType = {
    number: number
    street: streetType
}

type houseType = {
    id: number
    build: number
    repaired: boolean
    address: addressType
}

type govermentBuildingsType = {
    type: string
    address: addressType
    budget: number
    staffCount: number
}

export type cityType = {
    title: string
    houses: Array<houseType>
    govermentBuildings: Array<govermentBuildingsType>
    citypopulation: number
}


type peopleType = {
    name: string
    age: number
}

export const people: Array<peopleType> = [
    {name: 'Miha Goroshko', age: 32},
    {name: 'Alina Goroshko', age: 27},
    {name: 'Sasha Malaeva', age: 19},
    {name: 'Polina Malaeva', age: 19},
]

export const transformator = (man: peopleType) => {
    return {
        stack: ['html', 'css', 'js', 'ts', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
}

const callbackfn = (p: peopleType) => {
    return `Hello student ${p.name.split(' ')[0]}`
};
export const messages = people.map(callbackfn)
