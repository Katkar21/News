import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirectToLogin(){
    this.router.navigate(['/login'])
  }

  redirectToReg(){
    this.router.navigate(['/reg'])
  
  }

  redirectToAdmin(){
    this.router.navigate(['/admin'])
  }

}
