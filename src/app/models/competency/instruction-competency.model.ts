export interface InstructionCompetency {
    id: string;
    competencyName: string;
    employeeName: string;
    department: string;
    college: string;
    
    //#region INSTRUCTION 1

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

    //#region INSTRUCTION 2

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

    //#region INSTRUCTION 3

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

    //#region INSTRUCTION 4

    fourBasicOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    fourIntermediateOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    fourAdvancedOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    fourSuperiorOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    
    fourBasicResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    fourIntermediateResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    fourAdvancedResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    fourSuperiorResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };

    fourEssay: string;

    //#endregion

    //#region INSTRUCTION 5

    fiveBasicOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    fiveIntermediateOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    fiveAdvancedOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    fiveSuperiorOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    
    fiveBasicResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    fiveIntermediateResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    fiveAdvancedResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    fiveSuperiorResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };

    fiveEssay: string;

    //#endregion

    //#region INSTRUCTION 6

    sixBasicOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    sixIntermediateOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    sixAdvancedOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    sixSuperiorOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    
    sixBasicResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    sixIntermediateResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    sixAdvancedResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    sixSuperiorResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };

    sixEssay: string;

    //#endregion

    //#region INSTRUCTION 7

    sevenBasicOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    sevenIntermediateOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    sevenAdvancedOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    sevenSuperiorOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    
    sevenBasicResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    sevenIntermediateResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    sevenAdvancedResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    sevenSuperiorResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };

    sevenEssay: string;

    //#endregion

    dateCreated: string;
    timeCreated: string;
}