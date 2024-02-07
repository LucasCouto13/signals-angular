import {Component, computed, effect, OnInit, signal} from '@angular/core';
import {isCI} from "@angular/cli/src/utilities/environment-options";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'signals-angular';
  count = signal(0);
  countDouble = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      console.log(this.countDouble());
    });
  }
  ngOnInit() {

  }

  increment() {
    this.count.update(count => count + 1);
  }

  decrement() {
    this.count.update(count => count - 1);
  }

  set() {
    this.count.set(10);
  }
}
