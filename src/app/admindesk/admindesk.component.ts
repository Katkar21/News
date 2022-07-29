import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admindesk',
  templateUrl: './admindesk.component.html',
  styleUrls: ['./admindesk.component.css']
})
export class AdmindeskComponent implements OnInit {

  constructor(private userservice:UserService,private router:Router) { }
  user:User[]=[]
  
  ngOnInit(): void {
    this.userservice.getallusers().subscribe(
      data=>{
        this.user=data
      },
      error=>{
        console.log(error)
      }
    )
 
  }

  

  deleteUser(em:string){
    this.userservice.deleteUser(em).subscribe(
      data=>{
        alert("deleted")
        this.router.navigate(['/admindesk'])
      },
      error=>{
        console.log(error)
      }
    )


  }



}
