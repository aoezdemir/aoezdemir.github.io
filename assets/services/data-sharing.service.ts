import { SearchResultDto } from 'src/assets/interfaces/searchResultDto';
import { CarClass } from '../enums/carClass';
import { SelectCarResult } from '../interfaces/selectCarResult';
import { PostSearchDto } from '../interfaces/postSearchDto';
import { Injectable } from '@angular/core';
import { SelectInsuranceResult } from '../interfaces/selectInsuranceResult';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private _carSelectionResults!: SearchResultDto;
  private _carSelected!: {
    id: number,
    make: string,
    model: string,
    year: number,
    site: string,
    color: string,
    dailyRentalPrice: number,
    carClass: CarClass, 
    transmissionType: string
  };
  private _totalPrice!: number;
  private _insurance!: string;
  private _fromDate!: string | null;
  private _toDate!: string | null;
  private _insurancePrice!: number;
  private _processInstanceId!: string;
  private _selectCarResponse!: SelectCarResult;
  private _insuranceSelectionResult!: SelectInsuranceResult;
  
  constructor() { 
  }

  public set carSelectionResults(input: SearchResultDto) {
    this._carSelectionResults = input;
  }

  public get carSelectionResults(): SearchResultDto {
    return this._carSelectionResults;
  }

  public set insuranceSelectionResult (input: SelectInsuranceResult) {
    this._insuranceSelectionResult = input;
  }

  public get insuranceSelectionResult(): SelectInsuranceResult {
    return this._insuranceSelectionResult;
  }


  public set carSelected(input:{
    id: number,
    make: string,
    model: string,
    year: number,
    site: string,
    color: string,
    dailyRentalPrice: number,
    carClass: CarClass, 
    transmissionType: string
  } ) {
    this._carSelected = input;
  }

  public get carSelected():{
    id: number,
    make: string,
    model: string,
    year: number,
    site: string,
    color: string,
    dailyRentalPrice: number,
    carClass: CarClass, 
    transmissionType: string
  } {
    return this._carSelected;
  }

  public set totalPrice(input: number) {
    this._totalPrice = input;
  }
  public get totalPrice():number {
    return this._totalPrice;
  }

  public set insurancePrice(input: number) {
    this._insurancePrice = input;
  }
  public get insurancePrice():number {
    return this._insurancePrice;
  }

  public set insurance(input: string) {
    this._insurance = input;
  }
  public get insurance():string {
    return this._insurance;
  }

  public set fromDate(input: string | null) {
    this._fromDate = input;
  }
  public get fromDate():string | null{
    return this._fromDate;
  }

  public set toDate(input: string | null) {
    this._toDate = input;
  }
  public get toDate():string | null{
    return this._toDate;
  }
  public set processInstanceId(input: string) {
    this._processInstanceId = input;
  }
  public get processInstanceId():string {
    return this._processInstanceId;
  }
  public set selectCarResponse(input: SelectCarResult) {
    this._selectCarResponse = input;
  }
  public get selectCarResponse():SelectCarResult {
    return this._selectCarResponse;
  }

}
