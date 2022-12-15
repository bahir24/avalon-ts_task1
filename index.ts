import { usersArray } from './users';
import { usersInfoArray } from './userInfo';
function getUsersJobPositions(usersArray: IUser[]): IUserPosition[] {
    return usersArray.map(function (user: IUser): IUserPosition {
        const userPosition: IUserInfo | undefined = usersInfoArray.find(
            (userPositions: IUserInfo) => userPositions.userid === user.userid
        );

        const newUserPosition: IUserPosition = {
            position: userPosition?.organization.position || '',
            age: userPosition?.age || 0,
            name: userPosition?.name || '',
            gender: user?.name || '',
        };
        return newUserPosition;
    });
}

const usersPositions = getUsersJobPositions(usersArray);

console.log('userPositions', usersPositions)

interface IUserPosition {
    name: string,
    position: string,
    age: number,
    gender: string
}


interface IUser {
    userid: string,
    name: string,
    gender: string
}

interface IUserInfo {
    userid: string,
    name: string,
    birthdate: string,
    age: number,
    organization: IOrgainzation
}

interface IOrgainzation {
    name: string,
    position: string
}