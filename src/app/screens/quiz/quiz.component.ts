import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  id: number = 0;
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = Number(par['idmonhoc']);
    })
  }

}
