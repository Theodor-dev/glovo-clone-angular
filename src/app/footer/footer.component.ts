import { Component, OnInit } from '@angular/core';
import { ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  icon: string = 'bi-chevron-down';

  constructor() {}

  ngOnInit(): void {
  }



  lang(selectLang: HTMLSelectElement) {

    if (selectLang.value == selectLang.value) {
      console.log(selectLang.value);
    }
  }

  switchIcon() {
    if (this.icon == 'bi-chevron-down') {
      this.icon = 'bi-chevron-up';
    } else {
      this.icon = 'bi-chevron-down';
    }
  }

}
