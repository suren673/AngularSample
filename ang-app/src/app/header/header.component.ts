import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
name1: string;
  constructor() { }

  ngOnInit(): void {
    this.name1 =  'Great';
  }

}
