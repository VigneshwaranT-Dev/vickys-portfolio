import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'portfolio-aboutmepopup',
  standalone: true,
  imports: [],
  templateUrl: './aboutmepopup.component.html',
  styleUrls: ['./aboutmepopup.component.css']
})
export class AboutmepopupComponent {
  public nameHeading = "I introduce myself as {{ Vigneshwaran }}"
constructor( ) {}
}
