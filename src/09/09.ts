export type userType = {
    name: string
    age: number
}

export function increaseAge(u: userType) {
    u.age++
}