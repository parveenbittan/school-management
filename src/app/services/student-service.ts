import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class StudentService {   
    baseUrl='http://localhost:9000/student';
  constructor(private http:HttpClient) { }
  getStudentList(searchData:any): Observable<any> {
 
    return this.http.post<any[]>(`${this.baseUrl}/students`,searchData);
    
  }
  getStudentListWithFee(searchData:any): Observable<any> {
 
    return this.http.post<any[]>(`${this.baseUrl}/studentsWithFee`,searchData);
    
  }
  getStudentAttendenceList(searchData:any): Observable<any> {
 
    return this.http.post<any[]>(`${this.baseUrl}/studentAttendence`,searchData);
    
  
  }
  getStudent(id:any): Observable<any> {
 
   return this.http.get<any>(`${this.baseUrl}/student/${id}`);
    
  }
  getStudentFee(searchData:any): Observable<any> {
 
    return this.http.post<any[]>(`${this.baseUrl}/studentFee`,searchData);
     
   }
   getStudentFeeHis(searchData:any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/feeHistory/${searchData.sessionId}/${searchData.classId}/${searchData.studentId}`);
    
   }
   saveAttendence(stdents:any): Observable<any> {
    
    return this.http.post<any[]>(`${this.baseUrl}/saveAttendence`,stdents); 
   }
   saveFee(student:any): Observable<any> {
 
    return this.http.post<any[]>(`${this.baseUrl}/saveFee`,student);
     
   }
   
  getStudentResultList(searchData:any): Observable<any> {
 
    return this.http.post<any[]>(`${this.baseUrl}/result`,searchData);
    
  }
  saveResultList(resultParamData:any): Observable<any> {
 
    return this.http.post<any[]>(`${this.baseUrl}/saveResult`,resultParamData);
    
  }
  saveStudent(studentData:any): Observable<any> { 
     
    return this.http.post<any>(`${this.baseUrl}/saveStudent`, studentData)
    
   
  }
 
  
}