
import { Component, ViewChild } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { TableFormat } from '../table-format';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.html',
  styleUrls:['./material-table.css']

})
export class MaterialTableComponent
{
  tableData ?: TableFormat[] ;                                                      //the array of interfaces
  columnHeadings: string[] = ['ID', 'Name', 'Male', 'contactNo'];                   // the column headings references
  dataSource: any;                                                                  //dataSource property that the mat-table looks at
  selectionNames:any[]=[];
  
  /* Children Views */
  @ViewChild(MatPaginator) paginator!: MatPaginator | null;                         //MatPaginator is passed from template to component so that any change can be bound
  @ViewChild(MatSort) sortColumn!: MatSort | null;
  

  /* First function called after Initialisation */
  ngOnInit()                  
  { 
    this.storeTableInArray();                                                       //initialise tableData[]
    this.dataSource = new MatTableDataSource<TableFormat>(this.tableData);          //initialise dataSource where the mat-table looks ; bound in the template 
  }

  /* Called After ngOnInit */
  ngAfterViewInit() 
  { 
    this.dataSource.paginator = this.paginator; 
    this.dataSource.sort= this.sortColumn;
  }                 
 
  storeTableInArray()
  { this.dbService.fetchTable().subscribe( dbTable => this.tableData = dbTable) }  //store the subscribed observable in tableData[]
  

  onClick(row:TableFormat)
  {
    this.selectionNames.push(row.Name);
  }

  annnounceSortChange(sortState : Sort)
  {
    if(sortState.direction) this.liveAnnouncer.announce('Sorted ${sortState.direction}');
    else this.liveAnnouncer.announce('Sorting Cleared');
  }

  filterOut(filterValue: string)
  {
    this.dataSource.filter=(filterValue.trim().toLowerCase())
  }

/* Constructor intialisations to instantiate the imports */
  constructor
  ( 
    private dbService : DataBaseService, 
    private liveAnnouncer : LiveAnnouncer
  ){}                                         
    
}
