import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {User}from '../user';

@Injectable({
  providedIn: 'root'
})
export class GithubHttpService {
  user:User;
   
    
  constructor(private http:HttpClient) { 
    this.user=new User("","","",0,0,0,"",new Date())
    
  }

  userRequest(userInput){
  
    var userName=userInput;
    
    interface ApiResponse{
      name:string;
      avatar_url:string;
      clone_url:string;
      followers_url:number;
      following_url:number;
      repos_url:number;
      html_url:string;
     
    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>('https://api.github.com/users/' + userName).toPromise().then(response=>{
            
            this.user.name=response.name
            this.user.avatar_url=response.avatar_url
            this.user.clone_url=response.clone_url
            this.user.followers_url=response.followers_url
            this.user.following_url=response.following_url
            this.user.repos_url=response.repos_url
            this.user.html_url=response.html_url
          
            resolve()
        },
        error=>{
                this.user.name="never give up"
                this.user.avatar_url="winston"
                reject(error)
            }
        )
    })

    return promise
  }
}
