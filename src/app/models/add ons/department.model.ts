export interface Department {
    id: string;
    name: string;
    colleges: {
        id: string;
        name: string
    }[]
}