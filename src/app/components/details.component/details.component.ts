import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details.component',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  constructor(private _service: ServiceDepartamentos, private _router: Router){}

}
