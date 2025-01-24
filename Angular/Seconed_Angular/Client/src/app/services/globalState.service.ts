// globalState.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private globalStateUser = {
    user: 'John Doe',
    isLoggedIn: true,
  };

  getGlobalState() {
    return this.globalStateUser;
  }

  setGlobalStateUser(newData: any) {
    this.globalStateUser = newData;
  }
}
