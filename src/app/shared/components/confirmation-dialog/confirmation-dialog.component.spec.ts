import { OverlayContainer } from '@angular/cdk/overlay';
import { ApplicationRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MATERIAL_ANIMATIONS } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';

import { ConfirmationDialogData, openConfirmationDialog } from './confirmation-dialog.component';

const DATA: ConfirmationDialogData = {
  title: 'Delete employee?',
  message: 'Sara Ahmed (E-1001) will be permanently removed.',
  confirmText: 'Delete',
  cancelText: 'Cancel',
  danger: true,
};

describe('ConfirmationDialogComponent', () => {
  let overlay: HTMLElement;

  async function open(data = DATA): Promise<boolean[]> {
    const results: boolean[] = [];
    openConfirmationDialog(TestBed.inject(MatDialog), data).subscribe((r) => results.push(r));
    await TestBed.inject(ApplicationRef).whenStable();
    return results;
  }

  function button(text: string): HTMLButtonElement {
    const match = Array.from(overlay.querySelectorAll('button')).find(
      (b) => b.textContent?.trim() === text,
    );
    if (!match) {
      throw new Error(`No "${text}" button`);
    }
    return match;
  }

  beforeEach(() => {
    // afterClosed() waits for the exit animation, which never finishes in jsdom.
    TestBed.configureTestingModule({
      providers: [{ provide: MATERIAL_ANIMATIONS, useValue: { animationsDisabled: true } }],
    });
    overlay = TestBed.inject(OverlayContainer).getContainerElement();
  });

  afterEach(() => TestBed.inject(MatDialog).closeAll());

  it('renders the title, message and a red confirm button', async () => {
    await open();

    expect(overlay.querySelector('h2')?.textContent).toContain('Delete employee?');
    expect(overlay.textContent).toContain('Sara Ahmed (E-1001) will be permanently removed.');
    expect(button('Delete').classList).toContain('btn-danger');
  });

  it('emits true when confirmed', async () => {
    const results = await open();

    button('Delete').click();
    await TestBed.inject(ApplicationRef).whenStable();

    expect(results).toEqual([true]);
  });

  it('emits false when cancelled', async () => {
    const results = await open();

    button('Cancel').click();
    await TestBed.inject(ApplicationRef).whenStable();

    expect(results).toEqual([false]);
  });

  it('uses the regular primary style without danger', async () => {
    await open({ ...DATA, danger: false, confirmText: 'OK' });

    expect(button('OK').classList).not.toContain('btn-danger');
  });
});
