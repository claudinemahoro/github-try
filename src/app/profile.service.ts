import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {Http, Headers} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:any;
  private repos:any; 
  private access_token:"a1c381d713c48cc23bcd6923792eea703af9051c";
  
    constructor(private http:HttpClient) { 
      console.log("Hello");
      this.username='claudinemahoro';
      this.repos='https://github.com/search?q=Gustosa'; 
      this.access_token='a1c381d713c48cc23bcd6923792eea703af9051c';
    
    }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + 
    this.access_token);
   
  }
  
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" + 
    this.access_token);
  
  }
  
   getRepos(){
  return this.http.get("https://github.com/" + "search?q=" + this.repos);
     }
  
  updateProfile(username:string){
    this.username = username;
  }
  updateRepos(repos:any){
    this.repos = repos;
  }
  }

