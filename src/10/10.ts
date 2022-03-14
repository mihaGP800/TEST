export type userType = {
    name: string
    age: number
    address: {
        title: string,
        house: number
    }
}

export type LaptopType = {
    title: string
}

export type BookType = {
    books: string[]
}

export type CompanyType = {
    companies: { id: string, title: string }[]
}


export type UserWithlaptopType = userType & { laptop: LaptopType }

export const byeNewLaptop = (u: UserWithlaptopType, titleLaptop: string) => {
    return {...u, laptop: {...u.laptop, title: titleLaptop}}
}

export const addNewBook = (u: UserWithlaptopType & BookType, book: string) => {
    return {...u, books: [...u.books, book]}
}

export const replaceBooks = (u: UserWithlaptopType & BookType, oldBook: string, newBook: string) => ({
    ...u,
    books: u.books.map(el => el === oldBook ? newBook : el)
})

export const removeBook = (u: UserWithlaptopType & BookType, oldBook: string) => ({
    ...u, books: u.books.filter(el => el !== oldBook)
})

export const addCompany = (u: UserWithlaptopType & CompanyType, newCompanyTitle: string) => ({
    ...u, companies: [...u.companies, {id: '3', title: newCompanyTitle}]
})
