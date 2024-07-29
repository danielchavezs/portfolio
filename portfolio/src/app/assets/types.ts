export interface Parameters {
    name: string;
    email: string,
    prefix: string;
    phone: string;
    contactedBy: string,
    coName: string;
    message: string;
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

export type ProjectType = {
    id: number;
    name: string;
    images: string[];
    description: string;
    href: string
}

// export type ProjectProps = ProjectType{};

export type ProjectsType = ProjectType[]

export interface ProjectImageProps {
  src: string;
  alt: string;
  href: string;
}