export interface CategoryResult {
    
    //----Results//
    basicResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    intermediateResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    advancedResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };
    superiorResult: {
        id: string;
        notYet: boolean;
        partially: boolean;
        competent: boolean;
    };

    essay: string;

}