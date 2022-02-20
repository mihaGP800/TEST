
type manType = {
    name: string
    age: number
    lessons: {title: string}[]
    address: {
        country: 'belarus',
        city: 'minsk',
        street: {
            title: string
            house: number
        }
    }
}

let props: manType

beforeEach(() => {
    props = {
        name: 'Miha',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            country: 'belarus',
            city: 'minsk',
            street: {
                title: 'mayakovskogo',
                house: 99
            }
        }
    }
})


test('resolve quickly tests', () => {

    const {age, name, lessons, address: {street: {house}}} = props

    expect(age).toBe(32)
    expect(name).toBe('Miha')
    expect(lessons.length).toBe(2)
    expect(house).toBe(99)

})