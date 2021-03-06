import {Component, Input, OnInit} from '@angular/core';
import {Answer} from '../../services/Answer';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  @Input() answer: Answer;

  constructor() { }

  ngOnInit(): void {
  }

}
