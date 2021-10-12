import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll")
  scrollEvent() {
     window.pageYOffset >= 1 ? (this.isScrolled = true) : (this.isScrolled = false);
  }
}
