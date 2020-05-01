import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  modelform;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.modelform = this.fb.group({
      name : ['', Validators.required],
      price : ['', Validators.required],
      compatibility : [ [], Validators.required],
      image_formats : [ [], Validators.required],
      size : ['', Validators.required],
      geometry : ['', Validators.required],
      vertices : ['', Validators.required],
      textures : ['', Validators.required],

    })
  }

}
