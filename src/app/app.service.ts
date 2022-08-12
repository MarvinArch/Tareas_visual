import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_BASE = 'https://resttareas.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})
export class AppService{

  constructor(private http: HttpClient ) { }

  getAll(){
    return this.http.get(`${API_BASE}tarea/`);
  }

  create(tarea: any){
    return this.http.post(`${API_BASE}tarea/`, tarea);
  }

  update(id: String, tarea: any){
    return this.http.put(`${API_BASE}tarea/${id}`, tarea );
  }

  delete(id: String){
    return this.http.delete(`${API_BASE}tarea/${id}`);
  }
}
