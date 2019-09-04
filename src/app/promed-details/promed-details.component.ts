import {Promed} from '../promed';
import {Component, OnInit} from '@angular/core';
import {PromedService} from '../promed.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PromedDto} from '../promedDto';

@Component({
  selector: 'app-promed-details',
  templateUrl: './promed-details.component.html',
  styleUrls: ['./promed-details.component.css']
})
export class PromedDetailsComponent implements OnInit {

  id: number;
  promedDto: PromedDto;

  constructor(private route: ActivatedRoute, private router: Router,
              private promedService: PromedService) {
  }

  ngOnInit() {
    this.promedDto = new PromedDto();

    this.id = this.route.snapshot.params['id'];

    this.promedService.getPromed(this.id)
      .subscribe(data => {
        console.log(data);
        this.promedDto = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['promeds']);
  }
}
