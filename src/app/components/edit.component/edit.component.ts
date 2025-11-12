import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-edit.component',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  public departamento!: Departamento;

  @ViewChild("cajanumero") cajanumero!: ElementRef;
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad!: ElementRef;

  constructor(private _service: ServiceDepartamentos, private _activeRouter: ActivatedRoute, private _router: Router){}

  ngOnInit(): void {
    var id = 0;
    this._activeRouter.params.subscribe((params: Params) => {
      id = parseInt(params["numero"]);
    })
    this._service.getDepartamento(id).subscribe(response => {
      this.departamento = response;
    })
  }

  editarDepartamento(): void {
    var departamentoEditado = new Departamento(parseInt(this.cajanumero.nativeElement.value), this.cajanombre.nativeElement.value, this.cajalocalidad.nativeElement.value);
    this._service.editDepartamento(departamentoEditado).subscribe(response => {
      this._router.navigate(['/']);
    })
  }
}
