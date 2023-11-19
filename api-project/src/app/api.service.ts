import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http:HttpClient) {}

  post_url='https://jsonplaceholder.typicode.com/posts'

  getUser():Observable<any>{
    return this.http.get(this.post_url)
  }
}
