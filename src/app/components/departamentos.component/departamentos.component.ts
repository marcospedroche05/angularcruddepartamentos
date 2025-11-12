import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamentos.component',
  standalone: false,
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.css',
})
export class DepartamentosComponent implements OnInit {
  public departamentos!: Array<Departamento>;

  constructor(private _service: ServiceDepartamentos, private _router: Router){}

  ngOnInit(): void {
    this._service.getDepartamentos().subscribe(response => {
      this.departamentos = response;
    })  
  }

  eliminarDepartamento(numero: number): void {
    this._service.deleteDepartamento(numero).subscribe(response => {
      window.location.reload();
    })
  }
  
}
