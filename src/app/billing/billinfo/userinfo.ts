import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Userinfo {
  
  private url = 'http://localhost:3000/userinfo';

  // private url = 'YOUR_API_URL';

  constructor(private http: HttpClient) { }

  getuserinfo() {
    return this.http.get(this.url);
  }

  postuserinfo(data:any){
    return this.http.post(this.url,data);
  }

  updateuserinfo(id:number,data:any){
    return this.http.put(`${this.url}/${id}`,data);
  }

  deleteuserinfo(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
