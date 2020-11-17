import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'view'];
  posts: any = [];

  constructor(
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.dataService.getPosts()
      .subscribe(result => {
        if (result) {
          this.posts = new MatTableDataSource(result);
        }
      })
  }

  getOnePost(post) {
    this.router.navigate([`comment/${post.id}`]);
  }

}
