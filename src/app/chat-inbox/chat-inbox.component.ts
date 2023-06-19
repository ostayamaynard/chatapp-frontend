import { Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';

const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.css']
})
export class ChatInboxComponent implements OnInit {
  socket: Socket | undefined;
  message: string = '';
  chatHistory: string[] = [];
  notifications: string[] = [];

  constructor() { }

  ngOnInit() {
    this.setupSocketConnection();
  }

  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('message-broadcast', (data: { message: string, sender: string }) => {
      if (data && data.message) {
        this.chatHistory.push(data.message);
      }
    });

    this.socket.on('notification', (data: string) => {
      if (data) {
        this.notifications.push(data);
      }
    });
  }

  SendMessage() {
    if (this.message && this.socket) {
      const sender = 'Me'; // Replace with the sender's name or unique identifier
      this.socket.emit('message', this.message);
      this.chatHistory.push(`${sender}: ${this.message}`); // Push a string instead of an object
      this.message = '';
    }
  }
}