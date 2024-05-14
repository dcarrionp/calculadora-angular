import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  post : any
  photos : any
  info : any
  
  constructor(private postService : PostService){}
  
  ngOnInit(){
    this.postService.getAllPost().subscribe(data => {
      this.post = data
    })

    this.postService.getAllPhotos().subscribe(data => {
      this.photos = data
    })


  }

  showComments(msg: any) {
    const id = msg.id;
    const infoDiv = document.getElementById(`info-${id}`);
    if (infoDiv) {
        if (infoDiv.style.display === 'none') {
            infoDiv.style.display = 'block';
          } else {
              infoDiv.style.display = 'none';
          }
      }
  }
}