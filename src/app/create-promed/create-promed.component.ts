import { PromedService } from '../promed.service';
import { Promed } from '../promed';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-promed',
  templateUrl: './create-promed.component.html',
  styleUrls: ['./create-promed.component.css']
})
export class CreatePromedComponent implements OnInit {

  promed: Promed = new Promed();
  submitted = false;

  constructor(private promedService: PromedService,
    private router: Router) { }

  ngOnInit() {
    this.promed.kind = 'Medicament'
  }

  newPromed(): void {
    this.submitted = false;
    this.promed = new Promed();
  }

  save() {
    this.promedService.createPromed(this.promed)
      .subscribe(data => console.log(data), error => console.log(error));
    this.promed = new Promed();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/promeds']);
  }
}
