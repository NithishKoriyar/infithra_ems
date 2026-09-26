# Progress

Steps 1–3 (shell, mock API + services, Employee List) are done. The remaining work runs in
phases A → F, in order. After every phase: `npm run build` and `npm test` pass, the phase is
committed, and its box is ticked here. A fresh session continues from the first unticked phase.

- [x] **A — Employee List fixes:** card grows (page scrolls), thin scrollbars, page size 5/10/20,
      paginator select focus ring, plain employee IDs, always-visible sort arrows, re-check states.
- [x] **B — Add / Edit Employee form:** 3-step linear stepper, validators, documents FormArray,
      photo upload, searchable nationality select, save flow, unsaved-changes guard.
- [x] **C — Employee Details:** header + profile completeness, tabs with `?tab=`, overview
      accordion, documents grid + expiry pipe, activity timeline.
- [ ] **D — Polish (skipped at the user's request):** light mode, 390px mobile, accessibility, consistency, error toasts,
      not-found page, cleanup and build warnings.
- [x] **E — README.md:** overview, stack, run/test, structure, architecture, UI checklist,
      screenshots placeholders.
- [ ] **F — Dashboard (optional, skipped):** stat cards, expiring-documents card, SVG department donut.

The plan changed mid-way: the user asked to skip D and F and to add no new spec files.
B and C were built as simplified versions; README.md lists what was skipped or simplified.

## Notes for a fresh session

- Run `npm run api` (port 3000) before `npm start`. json-server needs `--fks _id` (already in the
  script) or it treats `employeeId` as a foreign key and a DELETE wipes every employee.
- Tests run in jsdom via Vitest; `src/test-setup.ts` installs an in-memory `localStorage`.
- Specs that close a MatDialog must provide `MATERIAL_ANIMATIONS` with `animationsDisabled: true`.
