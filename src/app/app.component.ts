import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { POST } from './post.interface';
import { ToSubscriptService } from './to-subscript.service';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  posts : POST[];
  @Input() input;
  @Input() post_id_to_edit;
  
  constructor(private http: HttpClient, private SubscriptService: ToSubscriptService){
  
  }
  
  ngOnInit(){
    this.SubscriptService.get_data().subscribe(response => this.posts = response)
  }

  edit(post: POST){
    this.input = post.title;
    this.post_id_to_edit = post.id;
  }

  save(){
    this.posts.forEach(post => {
      if( post.id === this.post_id_to_edit)
      {
        console.log('This.post_id_to_edit',this.post_id_to_edit)
      console.log('This.postid',post.id)
        post.title = this.input;
        return;
      }
    });

    
  }

  delete(param){
    this.posts = this.posts.filter(post => post.id !== param )
  }
}
