import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  user = new User();

  ngOnInit(): void {

    this.emailId = localStorage.getItem('emailId')+''
  }

  emailId = ''

  resetPass(resetForm:NgForm){

    if(resetForm.valid){

      this.user.emailId = this.emailId;
      this.userService.resetPass(this.user).subscribe(
        data=>{
          alert("Password Changed Successsfully")

          this.router.navigate(['/login'])

          localStorage.setItem('Password',this.user.userPassword)
          localStorage.setItem('Cpass',this.user.confirmPassword)
        },
        error=>{
          console.log(error)
        }
      )
  
    }
      
    }

}
