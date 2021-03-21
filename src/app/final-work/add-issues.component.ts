import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FinalWorkService } from './final-work.service';
import { Issue } from './issues.interface';

@Component({
  selector: 'add-issues',
  templateUrl: './add-issues.component.html',
})
export class DialogContentExampleDialog {
  issueSendForm: FormGroup;

  panelOpenState = false;

  constructor(fb: FormBuilder, public issuesService: FinalWorkService) {
    this.issueSendForm = fb.group({
      title: fb.control(''),
      body: fb.control(''),
    });
  }

  send(): void {

    
    if (!this.issueSendForm.value.title) {
      this.issueSendForm.get('title').setValue(this.issueSendForm.value.body);
    }

    this.issuesService.postUser(this.issueSendForm.value);
  }

  resetForm() {
    this.issueSendForm.reset();
  }
}
