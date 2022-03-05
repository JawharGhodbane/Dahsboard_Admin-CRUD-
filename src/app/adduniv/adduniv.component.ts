import { Component, OnInit } from '@angular/core';
import { UnivService } from '../services/univ.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-adduniv',
  templateUrl: './adduniv.component.html',
  styleUrls: ['./adduniv.component.css']
})
export class AddunivComponent implements OnInit {
  form: FormGroup;
    
  constructor(
    public univService: UnivService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      code_univ: new FormControl('', [Validators.required]),
      nom_univ: new FormControl('', Validators.required),
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.univService.create(this.form.value).subscribe(res => {
         console.log('univ created successfully!');
         this.router.navigateByUrl('/admin/univs/');
    })
  }
}
