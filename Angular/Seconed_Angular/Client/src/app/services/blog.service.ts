import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private apiKey = environment.API_BLOG_KEY;

  constructor(private http: HttpClient) {}

  getAllBlogs(): Observable<any> {
    const url = `https://www.googleapis.com/blogger/v3/blogs/2399953?key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getBlogById(blogId: string): Observable<any> {
    const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}?key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
