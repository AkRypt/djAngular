import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tutorial } from '../models/tutorial.model';

// Local API URL
const baseUrl = "http://localhost:8000/api/tutorials";

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  get(id: any) {
    return this.http.get<Tutorial>(`${baseUrl}/${id}`);
  }

  create(data: any) {
    return this.http.post<any>(baseUrl, data);
  }

  update(id: any, data: any) {
    return this.http.put<any>(`${baseUrl}/${id}`, data);
  }

  delete(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any) {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`)
  }
}
