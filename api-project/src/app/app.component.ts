import { Component } from '@angular/core';
import{ ApiService}from './api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api-project';

  constructor(private User:ApiService){}

  userArry:any=[]

  ngOnInit():void{
    this.getUser()
  }

  getUser(){
    this.User.getUser().subscribe(res=>{
      this.userArry=res
      console.warn(this.userArry)
    })
  }
}
