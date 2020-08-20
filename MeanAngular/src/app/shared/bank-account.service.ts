import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http: HttpClient) { }

  postBankAccount(formData) {
    return this.http.post(environment.apiBaseURI + '/BankAccounts', formData);
  }

  putBankAccount(formData) {
    return this.http.put(environment.apiBaseURI + '/BankAccounts/' + formData._id, formData);
  }

  deleteBankAccount(id) {
    return this.http.delete(environment.apiBaseURI + '/BankAccounts/' + id);
  }

  getBankAccountList() {
    return this.http.get(environment.apiBaseURI + '/BankAccounts');
  }
}
