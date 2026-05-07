import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private telaSubject = new BehaviorSubject<string>('dashboard');

  tela$ = this.telaSubject.asObservable();

  mudarTela(tela: string) {
    this.telaSubject.next(tela);
  }

}