import { Component } from '@angular/core';
import { Message } from '../../domain/message';
import { PostService } from '../../services/post.service';
import { MensajesService } from '../../services/mensajes.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bdatos',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './bdatos.component.html',
  styleUrl: './bdatos.component.css'
})
export class BdatosComponent {
  post : any
  photos : any
  info : any
  message: Message = new Message()
  messages:any

  constructor(private postService : PostService, private messagesService:MensajesService){

  }

  ngOnInit(){
    this.postService.getAllPost().subscribe(data => {
      this.post = data
    })

    this.postService.getAllPhotos().subscribe(data => {
      this.photos = data
    })

    this.messagesService.getMessages().then((data: { docs: any[]; }) => {
      this.messages = data.docs.map((doc:any) =>{
        console.log(doc.id)
        console.log(doc.data())
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      console.log('msgs', this.messages)
    })

  }

  guardar(msg: any) {
    const id = msg.id;
    const infoDiv = document.getElementById(`info-${id}`);
    if (infoDiv) {
        if (infoDiv.style.display === 'none') {
            infoDiv.style.display = 'block';
          } else {
              infoDiv.style.display = 'none';
          }
      }
    this.messagesService.addMessage(this.message)
  }
}
