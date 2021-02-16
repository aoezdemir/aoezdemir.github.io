export interface PostSearchDto {
    site: string,
    from: moment.Moment;
    to: moment.Moment;
    older23:number;
    numberOfDrivers: number
    numberOfCars: number
}