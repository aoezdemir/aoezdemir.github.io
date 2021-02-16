import { SearchResultDto } from 'src/assets/interfaces/searchResultDto';
import { PostSelectCarDto } from 'src/assets/interfaces/postSelectCarDto';
import { BookingDto } from './../interfaces/bookingDto';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostSearchDto } from '../interfaces/postSearchDto';
import { DatePipe } from '@angular/common';
import { SelectCarResult } from '../interfaces/selectCarResult';
import { PostSelectInsuranceDto } from '../interfaces/postSelectInsuranceDto';
import { SelectInsuranceResult } from '../interfaces/selectInsuranceResult';
import { PostAcceptAgreementDto } from '../interfaces/postAcceptAgreementDto';
import { PostIncidentReport } from '../interfaces/postIncidentReport';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  //private url= "http://localhost:8080/"

  private url= "http://bvis.wfm.fg-bks.uni-koblenz.de:8080/"
  
  constructor(private http: HttpClient, private datepipe: DatePipe) { }
  
  //carselection
  postSearch(searchInfo: PostSearchDto): Observable<SearchResultDto> {
    const body = new FormData();
    body.append("site", searchInfo.site);
    body.append("startDate",searchInfo.from.format("YYYY-MM-DD"));
    body.append("endDate",searchInfo.to.format("YYYY-MM-DD"));
    body.append("numberOfDrivers", searchInfo.numberOfDrivers.toString());
    body.append("olderThan23", searchInfo.older23.toString());
    body.append("numberOfCars", searchInfo.numberOfCars.toString());
 
    return this.http.post<SearchResultDto>(this.url + "carselection",body);
  }

  //selectCar
  postSelectCar(selectCarInput:  PostSelectCarDto): Observable<SelectCarResult> {
    const body = new FormData();
    body.append("carClass", selectCarInput.carClass.valueOf());
    body.append("processInstanceId", selectCarInput.processInstanceId);

    return this.http.post<SelectCarResult>(this.url +"selectcar", body);

  }
  
  //selectInsurance
  postSelectInsurance(selectInsuranceInput:  PostSelectInsuranceDto): Observable<HttpResponse<SelectInsuranceResult>> {
    const body = new FormData();
    body.append("insuranceId", selectInsuranceInput.insuranceId.toString());
    body.append("processInstanceId", selectInsuranceInput.processInstanceId);

    return this.http.post<SelectInsuranceResult>(this.url +"selectinsurance", body, {observe: "response"});

  }
  
  //acceptAgreement
  postAcceptAgreement(acceptAgreementInput:  PostAcceptAgreementDto): Observable<HttpResponse<{response: string}>> {
    const body = new FormData();
    body.append("acceptAgreement", acceptAgreementInput.acceptAgreement.toString());
    body.append("processInstanceId", acceptAgreementInput.processInstanceId);
    acceptAgreementInput.firstName? body.append("firstName", acceptAgreementInput.firstName) : "";
    acceptAgreementInput.lastName? body.append("lastName", acceptAgreementInput.lastName): "";
    acceptAgreementInput.email? body.append("email", acceptAgreementInput.email): "";
    acceptAgreementInput.phoneNumber? body.append("phoneNumber", acceptAgreementInput.phoneNumber): "";
    acceptAgreementInput.street? body.append("street", acceptAgreementInput.street): "";
    acceptAgreementInput.zipCode? body.append("zipCode", acceptAgreementInput.zipCode): "";
    acceptAgreementInput.city? body.append("city", acceptAgreementInput.city): "";
    acceptAgreementInput.country? body.append("country", acceptAgreementInput.country): "";
    acceptAgreementInput.birthDate? body.append("birthDate", acceptAgreementInput.birthDate.format("YYYY-MM-DD")): "";
    acceptAgreementInput.cardHolder? body.append("cardHolder", acceptAgreementInput.cardHolder): "";
    acceptAgreementInput.cardNumber? body.append("cardNumber", acceptAgreementInput.cardNumber.toString()): "";
    acceptAgreementInput.expiryMonth? body.append("expiryMonth", acceptAgreementInput.expiryMonth.toString()): "";
    acceptAgreementInput.expiryYear? body.append("expiryYear", acceptAgreementInput.expiryYear.toString()): "";
    acceptAgreementInput.cvv? body.append("cvv", acceptAgreementInput.cvv.toString()): "";
    
    return this.http.post<{response: string}>(this.url +"acceptagreement", body, {observe: "response"});

  }
  
  // incident Report
  postIncidentReport(incidentReportInput: PostIncidentReport): Observable<HttpResponse<{response: string}>> {
    const body = new FormData();
    body.append("incidentDate", incidentReportInput.incidentDate.format("YYYY-MM-DD"));
    body.append("licensePlate", incidentReportInput.licensePlate);
    body.append("driverFirstName", incidentReportInput.driverFirstName);
    body.append("driverLastName", incidentReportInput.driverLastName);
    body.append("driverAge", incidentReportInput.driverAge.toString());
    body.append("driverLicense", incidentReportInput.driverLicense);
    body.append("driverCountry", incidentReportInput.driverCountry);
    body.append("driverCity", incidentReportInput.driverCity);
    body.append("driverZipCode", incidentReportInput.driverZipCode);
    body.append("driverStreet", incidentReportInput.driverStreet);
    body.append("driverPhoneNumber", incidentReportInput.driverPhoneNumber);
    body.append("driverEmail", incidentReportInput.driverEmail);
    body.append("incidentSummary", incidentReportInput.incidentSummary);
    body.append("towingNeeded", incidentReportInput.towingNeeded.toString());
    body.append("accidentCity", incidentReportInput.accidentCity);
    body.append("accidentZipCode", incidentReportInput.accidentZipCode);
    body.append("accidentAddress", incidentReportInput.accidentAddress);
    

    return this.http.post<{response: string}>(this.url +"reportincident", body, {observe: "response"});

  }
  // postBooking(bookInfo: BookingDto, processInstanceId: string): Observable<HttpResponse<any>> {
  //   const body = new FormData();
  //   body.append("acceptAgreement", bookInfo.acceptAgreement.toString());
  //   body.append("processInstanceId", processInstanceId);
  //   body.append("firstName", bookInfo.firstName);
  //   body.append("lastName", bookInfo.lastName);
  //   body.append("email", bookInfo.email);
  //   body.append("birthDate",  bookInfo.birthDate.format("YYYY-MM-DD"));
    
  //   return this.http.post<any>(this.url + "acceptAgreement", body);
  // }
}
