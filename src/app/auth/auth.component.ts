import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  formType: any ;
  inputType : any = 'password'  
  constructor(private activatedRoute: ActivatedRoute, private commonservice : CommonService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( data => {
      this.formType = data.formType
    });
  }
  changeType():any{
    this.inputType == 'password' ? this.inputType = 'text' : this.inputType = 'password';
  }
  SaveForm(value: any): any{    
    console.log(value);
    if(this.formType == 'login'){
      this.commonservice.login(value).subscribe(
        res => console.log(res),
        err => console.log(err),
      )
    }else{
      this.commonservice.registations(value).subscribe(
        res => console.log(res),
        err => console.log(err),        
      );
    }
  }

}
