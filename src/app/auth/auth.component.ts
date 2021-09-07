import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  formType: any ;
  inputType : any = 'password'  
  constructor(private activatedRoute: ActivatedRoute, private commonservice : CommonService, private router: Router) { }

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
        res =>{
          if(res){
            Swal.fire({
              title: 'Thanks for connect with us ',
              text: '',
              icon: 'success',
              showCancelButton: false,
              confirmButtonText: 'Press Here For Login ',
              cancelButtonText: ''
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/']);
              }
            })
          }else{
            Swal.fire({
              title: 'User Already Register ',
              text: '',
              icon: 'warning',
              showCancelButton: false,
              confirmButtonText: 'close ',
              cancelButtonText: ''
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/register']);
              }
            })
          }

        },
        err => {
          Swal.fire({
            title: 'Oops ! something went worng ',
            text: '',
            icon: 'warning',
            showCancelButton: false,
            confirmButtonText: 'Press Here For Register yourSelf ',
            cancelButtonText: ''
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/register']);
            }
          })
        }
      );
    }
  }

  showMessage(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}
