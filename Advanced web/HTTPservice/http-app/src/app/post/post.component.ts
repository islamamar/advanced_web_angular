import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  Posts:any  = []  
  private  Url = "https://jsonplaceholder.typicode.com/posts" ; 
  constructor(  private service :PostService) {     


  } 
  onCreate(input : HTMLInputElement) { 
    let Post:any = {title : input.value};  
    input.value = '' ;       
    this.service.createPost(Post)
      .subscribe(response => { 
        Post.id  = response ;
        this.Posts.splice(0,0,Post)
      },(error:Response) => { 
        if(error.status === 400)
          alert(" new arror")
          // this.form.setErrors(error.json());          
        else 
        {
          alert(" unexpected error occured "); 
          console.log(error); 
        }
        
      })
  }
  onUpdate(post) {
    this.service.updatePost(post)
      .subscribe(response=> {
        console.log(response);
      }, error =>{ 
        alert(" unexpected error occured "); 
        console.log(error)
      })
  } 
  onDelete(post)
  {
    this.service.deletePost(2121251225812428)
    .subscribe(response =>{
      let index = this.Posts.indexOf(post);
      this.Posts.splice(index,1); 
    }, (error: Response) =>{
    if (error.status == 404)
    alert("the post has been already deleted"); 
    else{
      alert(" unexpected error occured "); 
      console.log(error); 
    }
      
    })
  }

  ngOnInit(): void { 
   this.service.getPost()
    .subscribe(response =>{
      // console.log(response);  
      this.Posts = response; 
    },error=>{
      alert(" unexpected error occured "); 
      console.log(error)
    })
  }

}
