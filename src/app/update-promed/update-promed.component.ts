import {Component, OnInit} from '@angular/core';
import {Promed} from '../promed';
import {PromedService} from '../promed.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PromedDto} from '../promedDto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-update-promed',
  templateUrl: './update-promed.component.html',
  styleUrls: ['./update-promed.component.css']
})
export class UpdatePromedComponent implements OnInit {

  id: number;
  promedDto: PromedDto;
  submitted = false;
  types = ['Procedure', 'Medicament'];
  promeds: Observable<Promed[]>;

  constructor(private route: ActivatedRoute,
              private promedService: PromedService,
              private router: Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.promedService.getPromed(this.id)
      .subscribe(data => {
        console.log(data);
        this.promedDto = data;
      }, error => console.log(error));
    this.promeds = this.promedService.getPromedsList();
  }

  onSubmit() {
    this.submitted = true;
    this.update();
  }

  update() {
    this.promedService.updatePromed(this.id, this.promedDto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.list();
  }

  onAddPromed() {
    this.promedDto.incompatiblePromeds.push(new Promed());
    console.log(this.promedDto.incompatiblePromeds);
  }

  onRemovePromed(promed: Promed) {
    this.promedDto.incompatiblePromeds = this.promedDto.incompatiblePromeds.filter(elem => elem !== promed);
  }

  list() {
    this.router.navigate(['promeds']);
  }
}
