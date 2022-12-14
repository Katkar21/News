import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  user = new User()

forgotPass(forgotForm:NgForm){
  if (forgotForm.valid){

    this.userService.forgotPass(this.user.emailId, this.user.securityQuestion, this.user.securityAnswer).subscribe(
      data=>{
        alert("data valid")
        this.router.navigate(['/reset'])
        localStorage.setItem('emailId', this.user.emailId)
      },
      error=>{
        console.log(error)     
      }
    )
  } else{
    alert('invalid')
  }
}

  // forgotPass(forgotForm: { valid: any; }) {

  //   if (forgotForm.valid) {

  //     this.userService.forgotPass(this.user.emailId, this.user.securityQuestion, this.user.securityAnswer).subscribe(
  //       data => {

  //         alert('data is valid')
  //         this.router.navigate(['/reset'])
  //         localStorage.setItem('emailId', this.user.emailId)
  //       }
  //       ,
  //       error => {

  //         console.log(error)
  //       }
  //     )
  //   }
  //   else {
  //     alert('data invalid')
  //   }

  // }
}
