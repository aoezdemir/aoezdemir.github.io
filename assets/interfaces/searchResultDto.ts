import { CarClass } from 'src/assets/enums/carClass';
export interface SearchResultDto {
   processInstanceId: string,
   fittingCars: [ {
        id: number,
        make: string,
        model: string,
        year: number,
        site: string,
        color: string,
        dailyRentalPrice: number,
        carClass: CarClass, 
        transmissionType: string
} ]
}