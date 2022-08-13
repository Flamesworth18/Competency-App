export interface CategoryOptions {
        
    //----Options----//
    basicOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    intermediateOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    advancedOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];
    superiorOptions: {
        id: string;
        label: string;
        isChecked: boolean;
    }[];

}