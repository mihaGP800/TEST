import {ages, courses, CourseType, tasks} from "./04";

test('should take old man older 90 years', () => {

    const predicate = (age: number) => {
        return age > 90
    }

    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})

test('should take cheap curses about 300$', () => {

    // const cheapPredicate = (course: CourseType) => {
    //     return course.price < 300
    // }
    // const cheapCourses = courses.filter(cheapPredicate)
    const cheapCourses = courses.filter(course => course.price < 300)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].price).toBe(150)
    expect(cheapCourses[1].title).toBe('JS')

})

test('should take tasks with status isDone true',()=>{

    const filteredTasks = tasks.filter(task=>!task.isDone)

    expect(filteredTasks.length).toBe(1)
    expect(filteredTasks[0].title).toBe('learn CSS')
    // expect(filteredTasks[1].title).toBe('learn React')
})


