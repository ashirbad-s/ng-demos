
import { Component, ViewChild } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { TableFormat } from '../table-format';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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
  Message:any[]=[];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator | null;                         //MatPaginator is passed from template to component so that any change can be bound
  

  ngOnInit()                                                                        //first function called after declaring or initialising the properties
  { 
    this.storeTableInArray();                                                       //initialise tableData[]
    this.dataSource = new MatTableDataSource<TableFormat>(this.tableData);          //initialise dataSource where the mat-table looks ; bound in the template 
  }

  ngAfterViewInit() { this.dataSource.paginator = this.paginator; }                 // Called after ngOnInit
 
  storeTableInArray()
  { this.dbService.fetchTable().subscribe( dbTable => this.tableData = dbTable) }  //store the subscribed observable in tableData[]
  

  onClick(row:TableFormat)
  {
    this.Message.push(row.Name);
  }

  constructor
  ( private dbService : DataBaseService ){}                                         //Copy the DataBaseService into dbService instance
    
}
