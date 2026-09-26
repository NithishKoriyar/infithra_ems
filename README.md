# infithra — Employee Management

An Angular machine test: the Employee Management module of an HR/payroll app for UAE/GCC
companies. It covers an employee list, a 3-step add/edit form and an employee details page,
inside a shared app shell with a sidebar, top bar and breadcrumb. The UI uses Angular Material,
restyled flat and minimal. Dark mode is the default, with a light theme toggle. Data comes from
a local json-server mock API.

## Features

- **Employee list** (`/employees`)
  - Table and card views, remembered per browser.
  - Search by name, ID or email; filter by department; sort by name or joining date.
  - Pagination with 5 / 10 / 20 per page.
  - Loading skeleton, empty and error states with Retry.
  - Delete with a confirmation dialog and toast.
  - CSV export.
- **Add / edit employee** (`/employees/new`, `/employees/:id/edit`)
  - A linear 3-step stepper (Personal, Job, Other); vertical below 768 px.
  - Custom validators and inline errors.
  - Photo upload with preview.
  - Searchable nationality field and a department → designation cascade.
  - Contract end date shown only for contracts.
  - Skills chips and a documents list.
  - Save spinner and success toast; an unsaved-changes guard asks before you leave.
- **Employee details** (`/employees/:id`)
  - Header with photo or initials, status badge, contact details and a profile-completeness bar.
  - Tabs, deep-linkable with `?tab=`: Overview (accordion), Documents (expiry badges with
    tooltips) and Activity (timeline).
- **Shell**
  - Collapsible sidebar that becomes an overlay drawer on mobile.
  - Breadcrumb, notifications menu, avatar menu and theme toggle.

## Tech stack

| Package          | Version |
| ---------------- | ------- |
| Angular          | 21.2    |
| Angular Material | 21.2    |
| RxJS             | 7.8     |
| TypeScript       | 5.9     |
| json-server      | 0.17.4  |
| Vitest (tests)   | 4.1     |

## Getting started

Prerequisites: Node.js 20+ and npm.

```bash
npm install
```

Run the mock API and the app in two terminals:

```bash
npm run api     # mock API on http://localhost:3000
npm start       # app on http://localhost:4200
```

The list shows an error state with Retry if the API isn't running.

> The `api` script passes `--fks _id` to json-server. Without it, json-server treats
> `employeeId` as a foreign key, and deleting one employee deletes all of them.

## Tests and build

```bash
npm test        # unit tests (Vitest + jsdom)
npm run build   # production build into dist/
```

## Folder structure

```
src/app/
  core/services/            theme, notifications (MatSnackBar), breadcrumb
  layout/                   shell, sidebar, top bar, breadcrumb, logo, user menu
  shared/components/        confirmation dialog, empty state, loading skeleton, toast
  shared/pipes/             initials
  features/employees/
    employee-list/          list page, table view, card view, CSV export
    employee-form/          stepper page, form model, steps/personal|job|other
    employee-details/       page, header, overview, documents, activity
    components/             status badge and action menu (used by 2+ screens)
    guards/                 unsaved-changes guard
    pipes/                  document expiry
    services/               EmployeeService, EmployeeDropdownService (all HTTP lives here)
    models/ validators/     types, form validators
  features/dashboard|settings|not-found/   placeholder pages
src/styles/                 _tokens.scss (theme), _material.scss (Material restyle), _utilities.scss
mock-api/db.json            employees and lookup lists
```

## Architecture notes

- **Standalone components** with OnPush change detection and `inject()`.
- **Signals for UI state.** The list derives filtered → sorted → paged data with `computed()`.
  RxJS is only used for HTTP and form value streams, bridged with `toSignal`.
- **Typed reactive forms.** One `FormGroup<{ personal, job, other }>` drives the stepper; each
  step's sub-group is its `stepControl`. Validators live in `validators/employee.validators.ts`.
- **Services own all HTTP.** Components never inject `HttpClient`. Every error becomes a
  readable message that the UI shows in a toast or an error state. Lookup lists are cached
  with `shareReplay`.
- **Client-side list logic.** The API returns every employee once; search, filter, sort and
  paging run in the browser.
- **Unsaved-changes guard.** A functional `canDeactivate` guard opens the shared confirmation
  dialog when the form is dirty. A `beforeunload` handler covers tab closes and reloads.
- **Theme tokens.** Every colour is a CSS variable in `_tokens.scss`, and the `light` class
  on `<html>` swaps the palette. Material components are restyled through their `*-overrides`
  mixins, pointing at those tokens.

## Feature checklist

| Item                                           | Status              |
| ---------------------------------------------- | ------------------- |
| Employee table and card views                  | ✅                  |
| Search, department filter, sort                | ✅                  |
| Pagination (5 / 10 / 20)                       | ✅                  |
| Loading skeleton, empty and error states       | ✅                  |
| Delete confirmation dialog and toast           | ✅                  |
| CSV export                                     | ✅                  |
| 3-step linear form, vertical on mobile         | ✅                  |
| Field validations with brief error texts       | ✅                  |
| Photo upload (JPG/PNG, max 1 MB)               | ✅                  |
| Department → designation cascade               | ✅                  |
| Conditional contract end date                  | ✅                  |
| Skills chips with autocomplete                 | ✅                  |
| Documents FormArray                            | ✅                  |
| Unsaved-changes guard                          | ✅                  |
| Details header, profile completeness           | ✅                  |
| Details tabs (Overview / Documents / Activity) | ✅                  |
| Document expiry badges and tooltips            | ✅                  |
| Activity timeline                              | ✅                  |
| Dark / light theme                             | ✅                  |
| Responsive layout and mobile drawer            | ✅                  |
| Breadcrumb, notifications, avatar menu         | ✅                  |
| Dashboard                                      | ❌ placeholder only |

## Skipped or simplified

- **Dashboard:** left as a placeholder page (optional in the brief).
- **Nationality picker:** a `mat-autocomplete` that only accepts values from the list, rather
  than a select with a search box inside its panel.
- **Salary:** uses a plain number input with an AED prefix. It isn't reformatted to
  `12,500.00` on blur, but the details page shows it formatted.
- **Joining date:** checked as required only. There is no check that it falls at least 18
  years after the date of birth.
- **Files:**
  - The profile photo is stored as a data URL.
  - Document uploads store only the file name; there's no real file storage.
- **No authentication.** The signed-in user is a fixed demo user.
- **Tests:** the form, details page, guard, validators and expiry pipe have no dedicated specs.
  Existing specs were updated and all pass.
- **Final polish:** a full light-mode and 390 px review of the new form and details screens
  was not done.

## Screenshots

Screenshots go in `docs/screenshots/`:

| Screen          | File                              |
| --------------- | --------------------------------- |
| List (dark)     | `docs/screenshots/list-dark.png`  |
| List (light)    | `docs/screenshots/list-light.png` |
| Add / edit form | `docs/screenshots/form.png`       |
| Details         | `docs/screenshots/details.png`    |
| Mobile          | `docs/screenshots/mobile.png`     |
