import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private baseUrl = 'http://localhost:9000/student';
  constructor(private http: HttpClient) {}

  upload(file: File,id:any): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    
   console.log(`${this.baseUrl}/upload/${id}`);

return this.http.post<any>(`${this.baseUrl}/upload/${id}`,formData);
   // const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
    //  reportProgress: true,
    //  responseType: 'json'
   // });

   // return this.http.request(req);
  }

  
}