import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Getapidata {
  
  constructor(private http:HttpClient){}

  private url ="YOUR_API_URL";

  getdata(){
    return this.http.get(this.url);
  }

  postdata(data:any){
    return this.http.post(this.url,data);
  }

  upgradedata(id:number , data:any){
    return this.http.put(`${this.url}/${id}` , data);
  }

  deletedata(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
