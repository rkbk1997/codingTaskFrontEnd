import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.less'],
})
export class UploadPostComponent implements OnInit {
  form: FormGroup;
  file: any = null;

  constructor(private fb: FormBuilder, private commonService: CommonService) {
    this.form = this.fb.group({
      postTitle: ['', Validators.required],
      descriptions: [''],
    });
  }

  ngOnInit(): void {}

  handleFileInput(event: any) {
    this.file = event.target.files[0];
  }

  CreatePost(): void {
    if (this.file && this.form.valid) {
      const formData = new FormData();
      formData.append('image', this.file);
      formData.append('title', this.form.value.postTitle);
      formData.append('desc', this.form.value.descriptions);
      this.commonService.createPost(formData).subscribe((res: any) => {
        console.log('@@@, res', res);
      });
    }
  }
}
