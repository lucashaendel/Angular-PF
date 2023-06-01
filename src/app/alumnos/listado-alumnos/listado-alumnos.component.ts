import { Estudiante } from 'src/app/core/modelos/estudiante';
import { AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList, ViewChild } from '@angular/core';
import { MatColumnDef, MatHeaderRowDef, MatNoDataRow, MatRowDef, MatTable } from '@angular/material/table';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.scss']
})
export class ListadoAlumnosComponent implements OnInit, AfterContentInit, OnDestroy {

  @Input() encabezados!: string[]
  @Input() arrAlumnos!: Estudiante[]

  @Output() alumnoParaEliminar = new EventEmitter<Estudiante>();
  @Output() alumnoParaEditar = new EventEmitter<Estudiante>();
  
  @ContentChildren(MatHeaderRowDef) headerRowDefs!: QueryList<MatHeaderRowDef>;
  @ContentChildren(MatRowDef) rowDefs!: QueryList<MatRowDef<any>>;
  @ContentChildren(MatColumnDef) columnDefs!: QueryList<MatColumnDef>;
  @ContentChild(MatNoDataRow) noDataRow!: MatNoDataRow;

  @ViewChild(MatTable, {static: true}) table!: MatTable<any>;

  arrEncontrados!: Estudiante[]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
    this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
    this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
    this.table.setNoDataRow(this.noDataRow);
  }

  deleteStudents(student: Estudiante){
    this.alumnoParaEliminar.next(student)
  }

  editStudents(student: Estudiante){
    this.alumnoParaEditar.next(student)
  }

  applicarFiltro(e: any){
    this.arrEncontrados = []  
    let arr: Estudiante[] = this.arrAlumnos
    
   
    const obs = from(arr)
    const obsFilter = obs.pipe(
      filter((data: any)=> data.nombre.toLowerCase().includes(e.target.value.toLowerCase()))
    )
    
    const suscrip = obsFilter.subscribe(val=> this.arrEncontrados.push(val)) 
    suscrip.unsubscribe()
    if(e.target.value==''){
      this.arrEncontrados = []
    }
    
  }

  ngOnDestroy(): void {
    
  }

}
