import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  private  Url = "https://jsonplaceholder.typicode.com/posts" ; 
  constructor(private http :HttpClient) {

   } 
   getPost() {
   return  this.http.get(this.Url)
   } 
    createPost(Post){
      return this.http.post(this.Url,JSON.stringify(Post)) 
    } 
    deletePost(id){
       return this.http.delete(this.Url+"/"+id)
    }
    updatePost(post){ 
      return this.http.patch(this.Url+"/"+post.id,JSON.stringify({isRead:true})) 

    }
}
