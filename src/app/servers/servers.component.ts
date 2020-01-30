import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = 'No Server was created!';
  serverName = '';
  servers = ['testServer', 'testServer 2'];
  showDetail = false;
  details = [];


  userName = '';
  allowResetUserName = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    
  }

  ngOnInit() {
    console.log(this.allowNewServer);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
    this.servers.push(this.serverName);
    console.log(this.servers);
  }

  onToggleDitails = () => {
    this.showDetail = !this.showDetail;
    // this.details.push(this.details.length + 1);
    this.details.push(new Date());
  }





}
