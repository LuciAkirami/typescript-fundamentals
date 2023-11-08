// ------ Interfaces in Typescript ------
interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    startTrail: () => string, // or startTrail(): string
    getCoupon(couponname: string): number, 
}

// extending a user id with extra field - Reopening of interface
interface User {
    githubToken: string
}

const newUser: User = {dbId: 50, 
    email:"yoo@t", 
    userId:5,
    startTrail: () => {
        return "this is string"
    },
    getCoupon: (name: "couponss") => {
        return 10
    },
    githubToken: "heyy"
}

// ----- Interface Inheritence -------
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const newAdmin: Admin = {dbId: 50, 
    email:"yoo@t", 
    userId:5,
    startTrail: () => {
        return "this is string"
    },
    getCoupon: (name: "couponss") => {
        return 10
    },
    githubToken: "heyy",
    role: "admin"
}

export {}