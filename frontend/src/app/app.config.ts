import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApiHttpInterceptor } from './http-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideHttpClient(withInterceptorsFromDi()),
  {
    provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true
  },
  // importProvidersFrom(NgxsModule.forRoot([PanierState])), provideAnimationsAsync()]
};
