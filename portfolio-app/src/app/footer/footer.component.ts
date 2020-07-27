import { Component, OnInit } from '@angular/core';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  Facebook = faFacebook;
  Linkedin = faLinkedin;
  Mail = faEnvelopeSquare;
  Github = faGithub;
  ngOnInit(): void {
  }

}
