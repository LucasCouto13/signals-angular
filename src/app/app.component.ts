import {Component, computed, effect, OnInit, signal} from '@angular/core';
import {isCI} from "@angular/cli/src/utilities/environment-options";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
//  count = signal(0)
//  countDouble = computed(() => this.count() * 2);
  readonly states = statesOfBrazil;
  filter = signal('');
  statesFiltered = computed(() =>
    this.states.filter(e => e.nome.toLowerCase().includes(this.filter())));

  constructor() {
    /*effect(() => {
      console.log(this.countDouble());
    });*/
  }

  input(event: KeyboardEvent) {
      this.filter.set((event.target as HTMLInputElement).value);
  }

  /*
    increment() {
      this.count.update(count => count + 1);
    }

    decrement() {
      this.count.update(count => count - 1);
    }

    set() {
      this.count.set(10);
    }

  */
}

export const statesOfBrazil = [
  {"nome": "Acre", "sigla": "AC"},
  {"nome": "Alagoas", "sigla": "AL"},
  {"nome": "Amapá", "sigla": "AP"},
  {"nome": "Amazonas", "sigla": "AM"},
  {"nome": "Bahia", "sigla": "BA"},
  {"nome": "Ceará", "sigla": "CE"},
  {"nome": "Distrito Federal", "sigla": "DF"},
  {"nome": "Espírito Santo", "sigla": "ES"},
  {"nome": "Goiás", "sigla": "GO"},
  {"nome": "Maranhão", "sigla": "MA"},
  {"nome": "Mato Grosso", "sigla": "MT"},
  {"nome": "Mato Grosso do Sul", "sigla": "MS"},
  {"nome": "Minas Gerais", "sigla": "MG"},
  {"nome": "Pará", "sigla": "PA"},
  {"nome": "Paraíba", "sigla": "PB"},
  {"nome": "Paraná", "sigla": "PR"},
  {"nome": "Pernambuco", "sigla": "PE"},
  {"nome": "Piauí", "sigla": "PI"},
  {"nome": "Rio de Janeiro", "sigla": "RJ"},
  {"nome": "Rio Grande do Norte", "sigla": "RN"},
  {"nome": "Rio Grande do Sul", "sigla": "RS"},
  {"nome": "Rondônia", "sigla": "RO"},
  {"nome": "Roraima", "sigla": "RR"},
  {"nome": "Santa Catarina", "sigla": "SC"},
  {"nome": "São Paulo", "sigla": "SP"},
  {"nome": "Sergipe", "sigla": "SE"},
  {"nome": "Tocantins", "sigla": "TO"}
]
