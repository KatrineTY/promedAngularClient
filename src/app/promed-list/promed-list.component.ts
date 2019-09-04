import { PromedDetailsComponent } from './../promed-details/promed-details.component';
import { Observable } from "rxjs";
import { PromedService } from "./../promed.service";
import { Promed } from "./../promed";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {PromedDto} from '../promedDto';

@Component({
  selector: "app-promed-list",
  templateUrl: "./promed-list.component.html",
  styleUrls: ["./promed-list.component.css"]
})
export class PromedListComponent implements OnInit {
  promeds: Observable<Promed[]>;
  // promeds: Observable<Map<Promed, Promed[]>>;
// promedDtos: Observable<PromedDto[]>;
  constructor(private promedService: PromedService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.promeds = this.promedService.getPromedsList();
  }

  deletePromed(id: number) {
    this.promedService.deletePromed(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  promedDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updatePromed(id: number) {
    this.router.navigate(['update', id]);
  }
}
