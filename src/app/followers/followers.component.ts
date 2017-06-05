import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  private followers: number;
  private following: number;

  public constructor() {
    this.followers = 2850;
    this.following = 657;
  }

  public ngOnInit(): void {
  }

}
