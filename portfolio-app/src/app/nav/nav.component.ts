import { Component, OnInit } from '@angular/core';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  constructor() { }
  Facebook = faFacebook;
  Linkedin = faLinkedin;
  Mail = faEnvelopeSquare;
  Github = faGithub;

  ngOnInit(): void {
  }

}
