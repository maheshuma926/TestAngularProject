import { Component, OnInit } from '@angular/core';
import {TestServiceService} from "../service/test-service.service";

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
})
export class TestcompComponent implements OnInit {

  message: string = 'init';

  constructor(private testService:TestServiceService ) { }

  ngOnInit(): void {
    this.testService.getMessage('Mahesh')
      .subscribe(
        (data) =>{
          console.log('data', data);
          this.message = data.body ;
        },
        (error => {
          console.log('*** error', error);
        }),
        ()=>{
          console.log('completed');
        }
      )

  }

}
