export interface CovidDataRecord {
    dateRep: string;
    date: Date;
    day: number;
    month: number;
    year: number;
    cases: number;
    deaths: number;
    countriesAndTerritories: string;
    geoId: string;
    countryterritoryCode: string;
    popData2019: number;
    continentExp: string;
    casesPerTenThsnd: number;
}