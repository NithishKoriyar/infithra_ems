import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { catchError, of } from 'rxjs';

import { EmployeeDropdownService } from '../../../services/employee-dropdown.service';
import { fileType, maxFileSize } from '../../../validators/employee.validators';
import { PersonalForm } from '../../employee-form.model';

const PHOTO_TYPES = ['image/jpeg', 'image/png'];
const PHOTO_MAX_BYTES = 1024 * 1024;

@Component({
  selector: 'app-personal-step',
  imports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './personal-step.component.html',
  styleUrl: './personal-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalStepComponent {
  private readonly dropdowns = inject(EmployeeDropdownService);

  readonly form = input.required<PersonalForm>();

  protected readonly maxBirthDate = new Date();
  protected readonly countryCodes = toSignal(
    this.dropdowns.getCountryCodes().pipe(catchError(() => of([]))),
    { initialValue: [] },
  );
  private readonly nationalities = toSignal(
    this.dropdowns.getNationalities().pipe(catchError(() => of([]))),
    { initialValue: [] },
  );

  /** What's typed in the nationality box; drives the filtered options. */
  protected readonly nationalityQuery = signal('');
  protected readonly nationalityOptions = computed(() => {
    const query = this.nationalityQuery().trim().toLowerCase();
    return this.nationalities()
      .map((nationality) => nationality.name)
      .filter((name) => name.toLowerCase().includes(query));
  });

  protected readonly photoError = signal<string | null>(null);
  protected readonly photoFile = signal<{ name: string; size: string } | null>(null);

  protected onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) {
      return;
    }
    if (fileType(file, PHOTO_TYPES)) {
      this.photoError.set('Only JPG or PNG images are allowed');
      return;
    }
    if (maxFileSize(file, PHOTO_MAX_BYTES)) {
      this.photoError.set('Image must be 1 MB or smaller');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const control = this.form().controls.photoUrl;
      control.setValue(reader.result as string);
      control.markAsDirty();
      this.photoError.set(null);
      this.photoFile.set({ name: file.name, size: formatSize(file.size) });
    };
    reader.readAsDataURL(file);
  }

  protected removePhoto(): void {
    const control = this.form().controls.photoUrl;
    control.setValue(null);
    control.markAsDirty();
    this.photoFile.set(null);
  }
}

function formatSize(bytes: number): string {
  return bytes < 1024 * 1024
    ? `${Math.max(1, Math.round(bytes / 1024))} KB`
    : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}
