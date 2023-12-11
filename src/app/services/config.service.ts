import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  postConfig(configData: any): void{
    const configDetails = {
      ver: 1, 
      configDetails: configData
    };
    this.http.post<any>('http://localhost:3000/config', configDetails).subscribe
    map((res:any)=>{
       return res;
    })
  }

  getConfig() {
    return this.http.get<any>('http://localhost:3000/config').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getConfigById(id: number) {
    return this.http.get<any>('http://localhost:3000/config/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateConfig(configData: any, id: number) {
    const configDetails = {
      ver: 1, 
      configDetails: configData
    };
    return this.http.put<any>("http://localhost:3000/config/" + id, configDetails)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteConfig(id: number) {
    return this.http.delete("http://localhost:3000/config/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
