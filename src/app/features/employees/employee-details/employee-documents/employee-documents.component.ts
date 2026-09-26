import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';
import { EmployeeDocument } from '../../models/employee.model';
import { DocumentExpiry, DocumentExpiryPipe } from '../../pipes/document-expiry.pipe';

const BADGES: Record<DocumentExpiry['state'], { label: string; tone: string }> = {
  expired: { label: 'Expired', tone: 'badge--red' },
  expiring: { label: 'Expiring soon', tone: 'badge--orange' },
  valid: { label: 'Valid', tone: 'badge--green' },
};

@Component({
  selector: 'app-employee-documents',
  imports: [DatePipe, DocumentExpiryPipe, EmptyStateComponent, MatIconModule, MatTooltipModule],
  templateUrl: './employee-documents.component.html',
  styleUrl: './employee-documents.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDocumentsComponent {
  readonly documents = input.required<EmployeeDocument[]>();

  protected badge(expiry: DocumentExpiry): { label: string; tone: string } {
    return BADGES[expiry.state];
  }

  protected tooltip(expiry: DocumentExpiry): string {
    const days = Math.abs(expiry.daysLeft);
    const unit = days === 1 ? 'day' : 'days';
    if (expiry.daysLeft < 0) {
      return `Expired ${days} ${unit} ago`;
    }
    return expiry.daysLeft === 0 ? 'Expires today' : `${days} ${unit} left`;
  }
}
