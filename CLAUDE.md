# infithra — Employee Management (Angular machine test)

HR/payroll web app for UAE/GCC companies. This repo covers one module: **Employee Management**
(List, Add/Edit form, Details) inside a shared app shell. Built with Angular + Angular Material,
restyled flat and minimal (shadcn-like). Dark mode is the default; light mode must work everywhere.

## Commands

- `npm start` — dev server (http://localhost:4200)
- `npm run api` — mock API: `json-server --watch mock-api/db.json --port 3000`
- `npm test` — unit tests
- `npm run build` — production build (must pass with zero errors before a task is done)

## Tech rules

- Latest Angular, **standalone components only** (no NgModules), `inject()` instead of constructor DI.
- `ChangeDetectionStrategy.OnPush` on every component. Use **signals** for component/UI state
  (`signal`, `computed`, `input()`, `output()`); RxJS for HTTP and router streams (`toSignal` to bridge).
- Built-in control flow only: `@if`, `@for` (always with `track`), `@switch`. No `*ngIf` / `*ngFor`.
- Typed Reactive Forms (`FormBuilder.nonNullable`). No template-driven forms.
- Components never inject `HttpClient`. All HTTP goes through `features/employees/services/`.
- Base API URL comes from `src/environments/environment*.ts` (`apiUrl`), never hardcoded.
- Use only Angular Material / CDK components (mat-sidenav, mat-table, mat-menu, mat-dialog,
  mat-stepper, mat-snack-bar, mat-tabs, mat-expansion-panel, mat-datepicker, mat-chips…). Restyle them; don't hand-roll replacements.
- File naming keeps the `.component.ts` / `.service.ts` / `.guard.ts` / `.pipe.ts` suffixes
  (set in angular.json schematics). Selector prefix: `app-`.
- Every service, guard, pipe, validator and page component gets a `*.spec.ts` beside it.
- No `any`. Strict TypeScript. No unused imports. No `console.log` left behind.
- Accessibility: real `<button>`/`<a>`, `aria-label` on every icon-only button, visible focus ring,
  `aria-current="page"` on the active nav item and last breadcrumb.

## Folder structure (follow exactly)

```
src/app/
  app.component.* · app.config.ts · app.routes.ts
  core/services/        theme.service.ts, notification.service.ts (wraps MatSnackBar)
  layout/               shell/, top-bar/, sidebar/, breadcrumb/
  shared/components/    confirmation-dialog/, empty-state/, loading-skeleton/
  shared/pipes/         initials.pipe.ts
  features/employees/
    employee-list/      (+ employee-table/, employee-card/)
    employee-form/      (+ steps/personal-step/, steps/job-step/, steps/other-step/)
    employee-details/   (+ employee-header/, employee-overview/, employee-documents/, employee-activity/)
    components/         only things used by 2+ screens (employee-status-badge/, employee-action-menu/)
    guards/             unsaved-changes.guard.ts
    pipes/              document-expiry.pipe.ts
    services/ models/ validators/
    employees.routes.ts
  features/dashboard/   optional bonus, last
src/environments/  src/styles/ (_tokens.scss, _material.scss, _utilities.scss)  styles.scss
mock-api/db.json   public/ (static assets)
```

Placement rule: used by one screen → that screen's folder; by 2+ employee screens → `features/employees/components/`;
generic UI → `shared/`; app-wide logic → `core/`; shell → `layout/`.

## Routing

```
/                     → redirect to /employees
/dashboard            → placeholder (bonus later)
/employees            → list            data.breadcrumb 'Employees'
/employees/new        → form (add)      data.breadcrumb 'Add Employee'   canDeactivate unsavedChangesGuard
/employees/:id        → details         breadcrumb = employee full name (set at runtime)
/employees/:id/edit   → form (edit)     data.breadcrumb 'Edit Employee'  canDeactivate unsavedChangesGuard
/settings             → placeholder
```

All pages render inside `ShellComponent`. Employee routes are lazy-loaded (`loadChildren`).
Breadcrumb always starts with **Home** (links to `/`). Earlier items are muted links; the last item is bright text, not a link.

## Design system (source of truth — match exactly)

All colours are CSS variables in `src/styles/_tokens.scss`. Components use `var(--token)`, never raw hex.
Theme = class on `<html>`: none/`.dark` = dark (default), `.light` = light.

| Token                                      | Dark                                 | Light   |
| ------------------------------------------ | ------------------------------------ | ------- |
| `--side` (window + sidebar bg)             | #111111                              | #f4f4f5 |
| `--panel` (inset main panel)               | #0a0a0a                              | #fafafa |
| `--card`                                   | #171717                              | #ffffff |
| `--border`                                 | #262626                              | #e4e4e7 |
| `--text`                                   | #fafafa                              | #09090b |
| `--muted`                                  | #a1a1aa                              | #71717a |
| `--hover` (row/menu hover, chip/avatar bg) | #262626 / #1c1c1c                    | #f4f4f5 |
| `--nav-active`                             | #1a1a1a                              | #ffffff |
| `--accent`                                 | #3b82f6                              | #3b82f6 |
| `--ring`                                   | rgba(59,130,246,.35)                 | same    |
| `--danger`                                 | #ef4444 (fill #dc2626, text #f87171) | #dc2626 |

Status badges (soft pills with a 6px dot):
Active = green (`rgba(34,197,94,.14)` / `#4ade80`; light `#dcfce7` / `#15803d`),
Probation / Expiring soon = orange (`rgba(249,115,22,.15)` / `#fb923c`; light `#ffedd5` / `#c2410c`),
Inactive = grey (`rgba(161,161,170,.14)` / `#a1a1aa`; light `#f4f4f5` / `#52525b`),
Expired = red (`rgba(239,68,68,.15)` / `#f87171`; light `#fee2e2` / `#b91c1c`).

- **Font:** Inter (400/500/600). Page title 20px/600, card title 18px/500, body 14px, meta 12–13px muted.
- **Icons:** Material Symbols Outlined, weight 300, 18–20px, via `<mat-icon fontSet="material-symbols-outlined">`. No emoji anywhere.
- **Radius:** 12px main panel + cards + dialogs; 8px buttons, inputs, nav items, menus; 999px badges/avatars.
- **Flat:** no elevation shadows except a soft one on floating menus/dialogs. **Ripples disabled globally.**
- **Spacing:** 4/8px grid. Page padding 24px (16px mobile). Card padding 24px. Gaps 16–24px.
- **Sizes:** header 64px (56px mobile); nav items 40px; buttons/inputs 36px; header icon buttons 36px square outlined;
  avatar 32px in header; table rows 56px; sidebar 260px.
- **App shell:** sidebar on `--side`; main panel is an "inset sheet": 8px from window top/right/bottom,
  1px `--border`, 12px radius, `--panel` background, content scrolls inside it. When the sidebar is
  collapsed the panel has 8px on all sides. On mobile (< 1024px) the panel is full-bleed (no margin/border/radius),
  the sidebar becomes an overlay drawer with dim backdrop, and the header shows the logo.
- **Buttons:** primary = accent fill, white text; outlined = 1px border, transparent; danger = red fill.
- **Inputs:** labels above fields (13px/500), required `*` in red, 1px border, focus = accent border + 3px ring,
  error = red border + 12px red message below.

Reference files (if present): `docs/design-reference.css` (exact styles from the mockups) and `docs/screens/*.png`.

## Mock data conventions

- Employees have numeric `id` (json-server routes) and display `employeeId` like `"E-1001"`.
- Dates stored ISO (`2026-03-01`), displayed `01 Mar 2026`. Salary shown `AED 12,500.00`.
- Seed ≥ 12 employees, e.g. Sara Ahmed (E-1001, Finance, Accountant, Probation), Rashid Mansoor (E-1000, Finance, Manager, Active), Priya Nair (E-1014, IT, Developer, Inactive).

## Working agreement

- Build one step at a time; do only the step asked. Don't scaffold future features beyond placeholders.
- Before finishing a step: `npm run build` and `npm test` pass, then give a short summary of files created and anything skipped.
- Don't add libraries beyond Angular, Angular Material/CDK, RxJS and json-server without asking.
