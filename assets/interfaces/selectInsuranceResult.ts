export interface SelectInsuranceResult {
    dailyInsurancePrice: string,
    totalInsurancePrice: string,
    dailyCarPrice: string,
    totalCarPrice: string,
    totalPrice: string,
    carBrand: string,
    carModel: string,
    carClass: string,
    insuranceProductName: string,
    startDate: {
        year: number,
        month: string,
        monthValue: number,
        dayOfMonth: number,
        dayOfWeek: string,
        era: string,
        chronology: {
            calendarType: string,
            id: string
        },
        leapYear: boolean,
        dayOfYear: number
    },
    endDate: {
        year: number,
        month: string,
        monthValue: number,
        dayOfMonth: number,
        dayOfWeek: string,
        era: string,
        chronology: {
            calendarType: string,
            id: string
        },
        leapYear: boolean,
        dayOfYear: number
    }
}