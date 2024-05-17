import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class EmployeeService {   
    baseUrl='http://localhost:9000/employee';
  constructor(private http:HttpClient) { }
  getEmployeeList(searchData:any): Observable<any> {
 
    return this.http.post<any[]>(`${this.baseUrl}/employees`,searchData);
    
  }
  getEmployee(id:any): Observable<any> {

   return this.http.get<any>(`${this.baseUrl}/emp/${id}`);
    
  }
  
  
  
  saveEmp(studentData:any): Observable<any> { 
     
    return this.http.post<any>(`${this.baseUrl}/saveEmp`, studentData)
    
   
  }
  login(loginObj:any): Observable<any> { 
     
    return this.http.post<any>(`http://localhost:9000/login/`, loginObj)
    
   
  }
  changePassword(loginObj:any): Observable<any> { 
     
    return this.http.post<any>(`http://localhost:9000/login/changePassword`, loginObj)
    
   
  }
  
}