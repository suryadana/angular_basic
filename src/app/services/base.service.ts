import { of } from 'rxjs';
import { environment } from '../../environments/environment';

export class BaseService {
  protected urlBase: string;

  constructor() {
    this.urlBase = environment.production ? 'http://django-psql-persistent-angular-api.193b.starter-ca-central-1.openshiftapps.com/api/v1'
    : 'http://localhost:8000/api/v1';
  }

  protected handleError(error: any): any {
    console.log(error);
    return of({});
  }
}
