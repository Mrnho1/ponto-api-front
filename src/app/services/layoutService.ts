import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private telaSubject = new BehaviorSubject<string>('');

  tela$ = this.telaSubject.asObservable();

  mudarTela(tela: string) {
    this.telaSubject.next(tela);
  }

  sidebarAberta = new BehaviorSubject<boolean>(true);

  sidebar$ = this.sidebarAberta.asObservable();

  toggleSidebar() {
    this.sidebarAberta.next(!this.sidebarAberta.value);
  }

}