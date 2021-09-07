import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {
  postList=[{},{},{},{},{},{},{},{},{},{},{},{}]
  constructor() { }

  ngOnInit(): void {
  }

}
