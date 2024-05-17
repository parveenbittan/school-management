import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';



import { ClassModel } from '../model/ClassModel';
@Injectable({
  providedIn: 'root'
})

export class ManageService {   
    baseUrl='http://localhost:9000/masters';
  constructor(private http:HttpClient) { }
  getClasList(): Observable<any[]> {
   
    return this.http.get<any[]>(`${this.baseUrl}/classes`);
    
  }
  saveClass(classData:any): Observable<any[]> {   
    return this.http.post<any>(`${this.baseUrl}/saveClass`, classData)
   
  }
  getSessionList(): Observable<any[]> {
   
    return this.http.get<any[]>(`${this.baseUrl}/sessions`);
    
  }
  getActiveSubjectList(): Observable<any[]> {
   
    return this.http.get<any[]>(`${this.baseUrl}/activeSubject`);
    
  }
  saveSession(classData:any): Observable<any[]> {   
    return this.http.post<any>(`${this.baseUrl}/saveSession`, classData)
   
  }
  getSubjectList(): Observable<any[]> {
   
    return this.http.get<any[]>(`${this.baseUrl}/subjects`);
    
  }
  saveSubject(classData:any): Observable<any[]> {   
    return this.http.post<any>(`${this.baseUrl}/saveSubject`, classData)
   
  }
  getItemList(): Observable<any[]> {
   
    return this.http.get<any[]>(`${this.baseUrl}/items`);
    
  }
  saveItem(classData:any): Observable<any[]> {   
    return this.http.post<any>(`${this.baseUrl}/saveItem`, classData)
   
  }
  getExamList(): Observable<any[]> {
   
    return this.http.get<any[]>(`${this.baseUrl}/exams`);
    
  }
  saveExam(classData:any): Observable<any[]> {   
    return this.http.post<any>(`${this.baseUrl}/saveExam`, classData)
   
  }
  getPostList(): Observable<any[]> {
   
    return this.http.get<any[]>(`${this.baseUrl}/posts`);
    
  }
  savePost(classData:any): Observable<any[]> {   
    return this.http.post<any>(`${this.baseUrl}/savePost`, classData)
   
  }
  getActiveClasList(): Observable<any[]> {   
    return this.http.get<any[]>(`${this.baseUrl}/activeClass`);    
  }
  getExamListByClassId(data:any) : Observable<any[]> { 
    return this.http.get<any[]>(`${this.baseUrl}/activeExam/${data.classId}`);    
       
     
  }
  
  getActiveSession(): Observable<any[]> {   
    return this.http.get<any[]>(`${this.baseUrl}/activeSession`);    
  }
  getActiveExam(): Observable<any[]> {   
    return this.http.get<any[]>(`${this.baseUrl}/activeExam`);    
  }
  getActiveSubject(): Observable<any[]> {   
    return this.http.get<any[]>(`${this.baseUrl}/activeSubject`);    
  }
  getActivePost(): Observable<any[]> {   
    return this.http.get<any[]>(`${this.baseUrl}/activePost`);    
  }
  
  saveClassSubjects(classSubjects:any): Observable<any[]> {   
    return this.http.post<any>(`${this.baseUrl}/saveClassSubjects`, classSubjects)
   
  }
  saveExamClass(examClass:any): Observable<any[]> {   
    return this.http.post<any>(`${this.baseUrl}/saveExamClass`, examClass)
   
  }
  getClassSubjectsList(): Observable<any[]> {
   
    return this.http.get<any[]>(`${this.baseUrl}/classSubjects`);
    
  }
  getActivePostList(): Observable<any[]> {
   
    return this.http.get<any[]>(`${this.baseUrl}/activePost`);
    
  }
  getExamClassList(): Observable<any[]> {
   
    return this.http.get<any[]>(`${this.baseUrl}/examClasses`);
    
  }
  getclassById(id :any): Observable<any> {
   
    return this.http.get<any[]>(`${this.baseUrl}/class/${id}`);
    
  }
}