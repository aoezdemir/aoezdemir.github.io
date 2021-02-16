import { Observable } from 'rxjs';
import { DataSharingService } from 'src/assets/services/data-sharing.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { PostActiveTasksResult } from '../interfaces/postActiveTasksResult';
import { PostIncidentReport } from '../interfaces/postIncidentReport';
import { InvoiceDto } from '../interfaces/invoiceDto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //private url= "http://localhost:8080/"
  private url= "http://bvis.wfm.fg-bks.uni-koblenz.de:8080/"

  //private camundaUrl ="http://localhost:8080/engine-rest/"
  private camundaUrl ="http://bvis.wfm.fg-bks.uni-koblenz.de:8080/engine-rest/"
  readonly httpOptions: {
    headers: HttpHeaders,
    observe: "response"
  }
  constructor(private http:HttpClient, private dataSharingService: DataSharingService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Authorization": <string>sessionStorage.getItem("token")
      }),
      observe: "response"
    };
  }



  getActiveTasks(): Observable<HttpResponse<PostActiveTasksResult[]>> {
    const body = {}

    return this.http.get<PostActiveTasksResult[]>(this.url+"taskdata", this.httpOptions);
  }

  postRecordVehicleHandover(id: string)  {
    const body = {}
    return this.http.post(this.camundaUrl+"task/"+id+"/complete", body, this.httpOptions );
  }

  postReturnVehicle(licensePlate: string, contractId: number| undefined): Observable<HttpResponse<{response: string}>> {
    const body = new FormData();

    body.append("licensePlate", licensePlate);
    if (contractId !== undefined) {
      body.append("contractId", contractId.toString())
    }
    //body.forEach(element => console.log(element));
    return this.http.post<{response: string}>(this.url+ "vehiclereturn", body, this.httpOptions);
  }

  postEmployeeChecksCar(input: {vehicleStatus: string, descriptionOfDefects: string}, id: string) {
    let damageDetected: boolean; 
    if (input.vehicleStatus === "noDeficiencis") {
      damageDetected = false;
    } else {
      damageDetected = true;
    }
    const body = { "variables": {
        "damageDetected": {"value":damageDetected},
        "incidentSummary": {"value": input.descriptionOfDefects}
      }
    }

    return this.http.post(this.camundaUrl+"task/"+ id +"/complete", body, this.httpOptions );

  }

  postCheckInsuranceCoverage(input:{repairCosts: number, coveredAmount: number, coverage: string}, id:string):Observable<HttpResponse<any>> {
    let repairCostCovered: boolean;
    if (input.coverage ==="fullyCovered") {
      repairCostCovered = true;
    } else {
      repairCostCovered = false
    }
    const body = { 
      "variables": {
        "repairCostsCovered": { 
          "value": repairCostCovered
        },
        "coveredAmount": {
          "value": input.coveredAmount
        }
      }
    }
    return this.http.post<any>(this.camundaUrl+"task/"+ id +"/complete", body, this.httpOptions);
  }

  requestIncidentReportData(processInstanceId: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.url + "getincidentreport/"+ processInstanceId, this.httpOptions)
  }

  postEvaluateCarState(element:PostActiveTasksResult, conductRepair:string, drivable:string) {
    let drivableB: boolean;
    let body = {}
    if (conductRepair === "conductRepair") {
      body = { "variables": {
        "conductRepair": {"value": true}
      }
    }
    } else {
      if(drivable === "drivable") {
        drivableB = true;
      } else {
        drivableB = false;
      } 
      body = { "variables": {
        "conductRepair": {"value": false},
        "drivable": {"value": drivableB}
      }
    }
    }


    return this.http.post(this.camundaUrl+"task/"+ element.taskId +"/complete", body, this.httpOptions );
  }

  postRemoveFromStock(element: PostActiveTasksResult) {
    const body = new FormData();

    body.append("carId", element.rentalCar.id.toString())

    return this.http.post(this.url +"removefromstock", body, this.httpOptions);
  }

  postFixIncidentReport(incidentReportInput: PostIncidentReport, taskId:string, incidentIdInput: number) {
    const body = new FormData();
    body.append("taskId", taskId);
    body.append("incidentReportId", incidentIdInput.toString());
    body.append("incidentDate", incidentReportInput.incidentDate.format("YYYY-MM-DD"));
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

    return this.http.post(this.url + "fixincidentreport", body, this.httpOptions);
  }

  getRepairCost(processInstanceId: string): Observable<HttpResponse<InvoiceDto>> {
    return this.http.get<InvoiceDto>(this.url + "repairinvoice/"+ processInstanceId, this.httpOptions)
  }
  getMaintanceCost(processInstanceId: string): Observable<HttpResponse<InvoiceDto>> {
    return this.http.get<InvoiceDto>(this.url + "maintenanceinvoice/"+ processInstanceId, this.httpOptions)
  }

  postPayRepairCosts(input: PostActiveTasksResult) {
    const body = {};
    return this.http.post(this.camundaUrl+"task/"+ input.taskId +"/complete", body, this.httpOptions );
  }
  postPayMaintenanceCosts(input: PostActiveTasksResult) {
    const body = {};
    return this.http.post(this.camundaUrl+"task/"+ input.taskId +"/complete", body, this.httpOptions );
  }
}
