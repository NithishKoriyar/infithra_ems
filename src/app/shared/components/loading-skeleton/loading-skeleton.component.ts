import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/** Shimmering placeholders shaped like the employee table rows or cards. */
@Component({
  selector: 'app-loading-skeleton',
  templateUrl: './loading-skeleton.component.html',
  styleUrl: './loading-skeleton.component.scss',
  host: { role: 'status', 'aria-live': 'polite' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSkeletonComponent {
  readonly variant = input<'table' | 'cards'>('table');
  readonly count = input(5);
  readonly label = input('Loading…');

  protected readonly items = computed(() =>
    Array.from({ length: Math.max(0, this.count()) }, (_, index) => index),
  );
}
