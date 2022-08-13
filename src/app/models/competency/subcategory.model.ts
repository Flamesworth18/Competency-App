export interface SubCategory {
    options: {
        id: string;
        label: string;
        isChecked: boolean;
    }[]

    result: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    }

    essay: string;

}