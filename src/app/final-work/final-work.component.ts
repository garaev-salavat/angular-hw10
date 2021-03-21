import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FinalWorkService } from './final-work.service';
import { Issue, Issues } from './issues.interface';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    'number',
    'title',
    'url',
    'userprofile',
    'action',
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
    this.refresh();
  }

  public refresh() {
    this.issues.getIssues().subscribe((issues) => {
      this.issuesForm = this.fb.group({
        issues: this.fb.array([]),
      });
      this.issuesFormArray = this.issuesForm.get('issues') as FormArray;
      issues.forEach((issues, index) => this.issuesFormArray.insert(
        index,
        this.fb.group({
          number: this.fb.control(issues.number),
          state: this.fb.control(issues.state),
          created: this.fb.control(issues.created_at),
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

  ngAfterViewInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  replayDialog(issueIndex: any) {
    this.dialog.open(ReplayIssueDialog, {
      data: issueIndex,
    });
  }
}

@Component({
  selector: 'replay-issue.component',
  templateUrl: 'replay-issue.component.html',
})
export class ReplayIssueDialog {
  body: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public num: number,
    public issuesService: FinalWorkService
  ) {}

  addComment() {
    console.log('Комент', this.body);
    this.issuesService.addComent(this.num, this.body);
  }

  closeIssure() {
    this.issuesService.closeIssure(this.num);
  }
}
