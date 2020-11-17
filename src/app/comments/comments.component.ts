import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  displayedColumns: string[] = ['email', 'name', 'body'];
  post: any ={
    id: null,
  };
  comments: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.initParam()
  }

  initParam() {
    let postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.getPost(postId);
    }
  }

  getPost(id) {
    this.dataService.getPostById(id)
      .subscribe(result => {
        if (result) {
          this.post = result;
          this.getComments(result.id);
          this.changeDetector.markForCheck();
        }
      })
  }

  getComments(id) {
    let query = id ? `?postId=${id}` : '';

    this.dataService.getComment(query)
      .subscribe(result => {
        if (result) {
          this.comments = new MatTableDataSource(result);
          this.changeDetector.markForCheck();
        }
      })
  }

  //event handler
  onApplyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.comments.filter = filterValue.trim().toLowerCase();
  }

  onBackClick() {
    this.router.navigate([`/post`]);
  }

}
