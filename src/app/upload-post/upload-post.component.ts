import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.less'],
})
export class UploadPostComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      postTitle: ['', Validators.required],
      descriptions: [''],
      file: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
}
