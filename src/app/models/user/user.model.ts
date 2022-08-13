export interface User {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    emailAddress: string;
    username: string;
    passwordHash: string;
    passwordSalt: string;
    passwordResetToken: string;
    passwordTokenExpires: Date;
    forms: {
        id: string;
        username: string;
        indicator: string;
        situation: string;
        task: string;
        action: string;
        result: string;
        basic: {
            id: string;
            name: string;
        };
        intermediate: {
            id: string;
            name: string;
        };
        advanced: {
            id: string;
            name: string;
        };
        dateCreated: string;
        timeCreated: string;
    }[]
    department: string;
    college: string;
    rank: string;
    role: string;
    dateCreated: string;
}