import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: string[] = [];

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
