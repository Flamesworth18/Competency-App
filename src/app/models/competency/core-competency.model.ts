export interface CoreCompetency {
    id: string;
    competencyName: string;
    employeeName: string;
    department: string;
    college: string;
    
    //#region CORE 1

    oneBasicOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    oneIntermediateOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    oneAdvancedOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    oneSuperiorOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];

    oneBasicResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    oneIntermediateResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    oneAdvancedResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    oneSuperiorResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };

    oneEssay: string;

    //#endregion

    //#region CORE 2

    twoBasicOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    twoIntermediateOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    twoAdvancedOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    twoSuperiorOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    
    twoBasicResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    twoIntermediateResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    twoAdvancedResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    twoSuperiorResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };

    twoEssay: string;

    //#endregion

    //#region CORE 3

    threeBasicOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    threeIntermediateOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    threeAdvancedOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    threeSuperiorOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    
    threeBasicResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    threeIntermediateResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    threeAdvancedResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    threeSuperiorResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };

    threeEssay: string;

    //#endregion

    dateCreated: string;
    timeCreated: string;
}