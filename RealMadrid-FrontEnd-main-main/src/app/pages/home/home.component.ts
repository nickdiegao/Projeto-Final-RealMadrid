import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(section: string): void {
    this.viewportScroller.scrollToAnchor(section);
  }
}
