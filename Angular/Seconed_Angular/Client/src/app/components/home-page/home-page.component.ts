import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blog.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: true,
  imports: [HttpClientModule],
  providers: [BlogsService],
})
export class HomePageComponent implements OnInit {
  blog: any;
  title = 'All Blogs';

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogsService.getAllBlogs().subscribe(
      (response) => {
        console.log(response);
        this.blog = response;
      },
      (error) => {
        console.error('Error fetching blogs:', error);
      }
    );
  }

  setTitle(tit: string): void {
    this.title = tit;
  }
}
