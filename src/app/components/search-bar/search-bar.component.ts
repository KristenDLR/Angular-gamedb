import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
//  use router(dependecy) to redirect search page
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
// pass in the value of our input field
//inside onSubmit method receive form as an argument as ngform
// NgForm is used to create a top-level form group Instance, and it binds the form to the given form value.
  onSubmit(form: NgForm){
    this.router.navigate(['search', form.value.search])
  }
}
