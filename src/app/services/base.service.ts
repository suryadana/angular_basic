import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Toast } from '../utils/toast';

export class BaseService {
  protected urlBase: string;
  private toast: Toast;

  constructor() {
    this.urlBase = environment.production ? 'https://django-psql-persistent-angular-api.193b.starter-ca-central-1.openshiftapps.com/api/v1'
    : 'http://localhost:8000/api/v1';
    this.toast = new Toast;
  }

  protected handleError(operation: string, router: Router) {
    return (err: any) => {
      if (err instanceof HttpErrorResponse) {
        err = err.error;
        // If type data is string
        if (typeof err === 'string') {
          if (err === 'Signature has expired.') {
            localStorage.clear();
            router.navigate(['']);
          }
          this.toast.error(err);
          return;
        }

        // if type data is array
        if (Array.isArray(err)) {
          Array.from(err).forEach(item => {
            if (item === 'Signature has expired.') {
              this.toast.error(item);
              localStorage.clear();
              router.navigate(['']);
              return;
            }
            this.toast.error(item);
          });
          return;
        }

        // If type data is object
        for (const key in err) {
          if (key) {
            // If type data is string
            if (typeof (err[key]) === 'string') {
              if (err[key] === 'Signature has expired.') {
                this.toast.error(`Field ${key}, ${err[key]}`);
                localStorage.clear();
                router.navigate(['']);
                return;
              }
              this.toast.error(`Field ${key}, ${err[key]}`);
              continue;
            }

            if (Array.isArray(err[key])) {
              Array.from(err[key]).forEach(item => {
                if (item === 'Signature has expired.') {
                  this.toast.error(item.toString());
                  localStorage.clear();
                  router.navigate(['']);
                  return;
                }
                this.toast.error(`Field ${key}, ${item}`);
              });
            }
          }
        }
      }
      return environment.production ? throwError('') : throwError(`error in ${operation}()`);
    };
  }
}
