import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-details.component',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  public idDepartamento!: number;
  public departamento!: Departamento;
  constructor(private _service: ServiceDepartamentos, private _activeRouter: ActivatedRoute){}
  
  ngOnInit(): void {
      this._activeRouter.params.subscribe((params: Params) => {
        this.idDepartamento = parseInt(params["numero"]);
      })
      this.obtenerDepartamento(this.idDepartamento);
  }

  obtenerDepartamento(numero: number): void {
      this._service.getDepartamento(numero).subscribe(response => {
        this.departamento = response;
      }); 
  }

}
