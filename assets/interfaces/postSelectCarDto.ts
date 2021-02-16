import { CarClass } from "../enums/carClass";

export interface PostSelectCarDto {
    carClass: CarClass;
    processInstanceId: string;
}