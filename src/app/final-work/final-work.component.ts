import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FinalWorkService } from './final-work.service';
import { Issue, Issues } from './issues.interface';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentExampleDialog } from './add-issues.component';

@Component({
  selector: 'app-final-work',
  templateUrl: './final-work.component.html',
  styleUrls: ['./final-work.component.css'],
  providers: [DatePipe],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class FinalWorkComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'state',
    'created',
    'title',
    'url',
    'userprofile',
    "action"
  ];

  expandedElement: Issues | null;

  dataSource;

  issuesForm: FormGroup;

  issuesFormArray: FormArray;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public issues: FinalWorkService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.issues.getIssues().subscribe((issues) => {
      this.issuesForm = this.fb.group({
        issues: this.fb.array([]),
      });
      this.issuesFormArray = this.issuesForm.get('issues') as FormArray;
      issues.forEach((issues, index) =>
        this.issuesFormArray.insert(
          index,
          this.fb.group({
            state: this.fb.control(issues.state),
            created: this.fb.control(
              this.datePipe.transform(issues.created_at, 'yyyy-MM-dd')
            ),
            title: this.fb.control(issues.title),
            url: this.fb.control(issues.html_url),
            userprofile: this.fb.control(issues.user.html_url),
            body: this.fb.control(issues.body),
          })
        )
      );
      this.dataSource = new MatTableDataSource(this.issuesFormArray.controls);
            
    });
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}

