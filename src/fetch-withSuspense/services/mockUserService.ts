export class MockUserService{
    users = [
        {
            id: 0,
            firstname: 'Emily',
            lastname: 'Johnson',
            email: 'emily.johnson@example.com'
        },
        {
            id: 1,
            firstname: 'Liam',
            lastname: 'Martinez',
            email: 'liam.martinez@example.com'
        },
        {
            id: 2,
            firstname: 'Sophia',
            lastname: 'Chen',
            email: 'sophia.chen@example.com'
        },
        {
            id: 3,
            firstname: 'Noah',
            lastname: 'O\'Connor',
            email: 'noah.oconnor@example.com'
        },
        {
            id: 4,
            firstname: 'Isabella',
            lastname: 'Patel',
            email: 'isabella.patel@example.com'
        }
    ];

    getFirst() : Promise<IUser>{
        return new Promise<IUser>((resolve) => {
            setTimeout(() => {
                resolve(this.users[0])
            }, 2000)
        })
    }
}

export interface IUser{
    id : number,
    firstname : string,
    lastname : string,
    email : string,
}

export const mockUserService = new MockUserService()