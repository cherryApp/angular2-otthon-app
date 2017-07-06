import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  data: Object = {
      appTitle: "Csupaszív Nyugdíjasház",
      api: 'api',
      usersApi: 'http://localhost:3333'
  };

  constructor() {}

  get(key) {
    return this.data[key] || null;
  }

  set(key, value) {
      this.data[key] = value;
      return true;
  }

}
