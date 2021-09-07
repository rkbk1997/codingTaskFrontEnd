import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  formType: any ;
  inputType : any = 'password'
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( data => {
      this.formType = data.formType
    });
  }
  changeType():any{
    this.inputType == 'password' ? this.inputType = 'text' : this.inputType = 'password';
  }

}
