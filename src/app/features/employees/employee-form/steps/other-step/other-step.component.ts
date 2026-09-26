import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { catchError, of } from 'rxjs';

import { NotificationService } from '../../../../../core/services/notification.service';
import { EmployeeDropdownService } from '../../../services/employee-dropdown.service';
import { fileType, maxFileSize } from '../../../validators/employee.validators';
import {
  DocumentForm,
  NOTES_MAX_LENGTH,
  OtherForm,
  createDocumentForm,
} from '../../employee-form.model';

const DOCUMENT_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png'];
const DOCUMENT_MAX_BYTES = 2 * 1024 * 1024;

@Component({
  selector: 'app-other-step',
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  templateUrl: './other-step.component.html',
  styleUrl: './other-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtherStepComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly notifications = inject(NotificationService);

  readonly form = input.required<OtherForm>();

  protected readonly notesMax = NOTES_MAX_LENGTH;
  protected readonly documentTypes = toSignal(
    inject(EmployeeDropdownService)
      .getDocumentTypes()
      .pipe(catchError(() => of([]))),
    { initialValue: [] },
  );

  protected addDocument(): void {
    const documents = this.form().controls.documents;
    documents.push(createDocumentForm(this.fb));
    documents.markAsDirty();
  }

  protected removeDocument(index: number): void {
    const documents = this.form().controls.documents;
    documents.removeAt(index);
    documents.markAsDirty();
  }

  protected onFileSelected(event: Event, row: DocumentForm): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) {
      return;
    }
    if (fileType(file, DOCUMENT_FILE_TYPES)) {
      this.notifications.error('Only PDF, JPG or PNG files are allowed');
      return;
    }
    if (maxFileSize(file, DOCUMENT_MAX_BYTES)) {
      this.notifications.error('File must be 2 MB or smaller');
      return;
    }
    row.controls.fileName.setValue(file.name);
    row.controls.fileName.markAsDirty();
  }
}
