import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travel-website';
  email  : any;
  password : any;
  constructor(private http:HttpClient , private router: Router){
    
  }

  login(){
    let payload  = {email : this.email , password : this.password }
   
    return this.http.post('http://localhost:8000/api/login-user', payload ).subscribe(

    (response: any) => {
      sessionStorage.setItem('jwtToken', response.token);
      console.log("we are logged in" + response);
      if(response.success == true){
        this.router.navigate(['/destination'])
        
      }
    });

  }
}

// http://localhost:8000/api/login-user