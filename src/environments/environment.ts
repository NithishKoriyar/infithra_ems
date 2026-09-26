// Production build (GitHub Pages demo): no json-server is reachable, so an in-browser mock
// backend answers the API calls from mock-api/db.json. See core/interceptors/mock-backend.
export const environment = {
  production: true,
  apiUrl: 'api',
  mockBackend: true,
};
