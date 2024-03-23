export interface Jet {
  id: string;
  name: string;
  wingspan: string;
  engines: string;
  year: string;
}

export interface Jets {
  jets: Jet[];
}

export interface JetNameAndYear {
  name: string;
  year: string;
}

export interface GeminiAnswer {
  name: string;
  jetAttribute: {
    topSpeed?: number;
    fuelEfficiency?: number;
    maximumSeats?: number;
  };
  units: string;
}

export interface Heading {
  title: string;
  fontSize: string;
  alignment: string;
}
