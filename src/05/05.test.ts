import {cityType, messages, people, transformator} from "./05";

let city: cityType

beforeEach(() => {
    city = {
        title: 'NewYork',
        houses: [
            {id: 1, build: 2010, repaired: false, address: {number: 100, street: {title: 'White street'}}},
            {id: 2, build: 1999, repaired: true, address: {number: 501, street: {title: 'Happy street'}}},
            {id: 3, build: 2002, repaired: false, address: {number: 502, street: {title: 'Bad street'}}},
        ],
        govermentBuildings: [
            {
                type: 'Hospital',
                address: {street: {title: 'Central Str'}, number: 17}, budget: 500000,
                staffCount: 1000
            },
            {
                type: 'FireStation',
                address: {street: {title: 'South Str'}, number: 23}, budget: 750000,
                staffCount: 230
            }
        ],
        citypopulation: 10000000
    }
})

test('give list names streets of govermentBuildings', () => {

    const search = city.govermentBuildings.map(nameStreet => nameStreet.address.street.title.split(' ')[0])

    const welcomePeopleFromStreets = city.houses.map(h => `welcome people from ${h.address.street.title}`)

    // console.log(welcomePeopleFromStreets)
    expect(welcomePeopleFromStreets.length).toBe(3)
    expect(welcomePeopleFromStreets[2]).toBe('welcome people from Bad street')

    expect(search[0]).toBe('Central')
    expect(search[1]).toBe('South')
    expect(search).toStrictEqual(['Central', 'South'])
    expect(search.length).toBe(2)

})


test('creating developers from people', () => {

    const dev = people.map(p => ({
            stack: ['html', 'css', 'js', 'ts', 'react'],
            firstName: p.name.split(' ')[0],
            lastName: p.name.split(' ')[1]
        })
    )

    expect(dev.length).toBe(4)
    expect(dev[0].stack[0]).toBe('html')
    expect(dev[3].firstName).toBe('Polina')
    expect(dev[0].stack).toStrictEqual(["html", "css", "js", "ts", "react"])
    expect(messages[0]).toBe('Hello student Miha')

})