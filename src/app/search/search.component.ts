import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  profile:any;
  repos:any;
  username:string;

  constructor(private profileService:ProfileService) {}
    findProfile(){
      this.profileService.updateProfile(this.username);
      this.profileService.getProfileInfo().subscribe(profile => {
        console.log(profile);
        this.profile = profile;
      });
    this.profileService.updateProfile(this.username);
      this.profileService.getProfileRepos().subscribe(repos => {
        console.log(repos);
        this.repos = repos;
      });
    }
    findRepos(){
      this.profileService.updateRepos(this.repos);
      this.profileService.getRepos().subscribe(repos => {
        console.log(repos);
        this.repos = repos;
      });
    }
  ngOnInit() {
  }

}
