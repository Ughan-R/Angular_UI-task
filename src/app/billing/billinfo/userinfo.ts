import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Userinfo {
  
  // private url = 'http://localhost:3000/userinfo';

  private url = 'https://69d612f81c120e733ccd8dc2.mockapi.io/mainprojectapi/userinfo';

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
