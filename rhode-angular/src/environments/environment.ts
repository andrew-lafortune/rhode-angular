// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  supabaseUrl: 'https://lmibslgunouyvqyhpmaj.supabase.co', // comes from Supabase API settings
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtaWJzbGd1bm91eXZxeWhwbWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcyOTU3NDQsImV4cCI6MTk5Mjg3MTc0NH0.ctWoAs8CASCrcPNWLk22Ml8r4WtYOrIXjTxmjhGgCJI', // anon public key, safe to use in front end because we are using Row Level Security policies
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
