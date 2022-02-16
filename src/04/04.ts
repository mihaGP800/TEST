import React from "react";

export const ages = [23, 12, 45, 67, 34, 89, 90, 100, 34, 56]

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100]

export const courses = [
    {title: 'CSS', price: 150},
    {title: 'JS', price: 200},
    {title: 'React', price: 400},
]

export type CourseType = {
    title: string
    price: number
}

const cheapPredicate = (course: CourseType) => {
    return course.price < 300
}

const cheapCurses = [
    {title: 'CSS', price: 150},
    {title: 'JS', price: 200},
]

export const tasks = [
    {id:1, title: 'learn english', isDone: true},
    {id:2, title: 'learn CSS', isDone: false},
    {id:3, title: 'learn React', isDone: true},
    {id:4, title: 'learn native JS', isDone: true},
]
