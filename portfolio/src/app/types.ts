export interface Parameters {
    name: string;
    prefix: string;
    phone: string;
    contactedBy: string,
    coName: string;
}
  
export type Errors = {
    [key in keyof Parameters]: boolean;
  } & { count: number };
  
  
export interface Results {
    months: number;
    moNominal: number;
    moInterestOnly: number;
    toDisplay: string;
    totalPayment: string;
    solved: boolean;
  }