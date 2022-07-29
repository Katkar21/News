import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  AdminEmailId = ''
  AdminPassword=''
  AdminSecurityQuestion=''
  AdminSecurityAnswer=''

  loginValidate(regForm:NgForm){

    if(this.AdminEmailId=='admin@gmail' && this.AdminPassword=='0000' && this.AdminSecurityQuestion=='What is your pet name' && this.AdminSecurityAnswer=='dog'){
      alert("Admin loged in")
      this.router.navigate(['/admindesk'])

    }else
    alert("invalid admin")

  }
}
