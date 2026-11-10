import { Component } from '@angular/core';
import { Login } from '../components/login/login';
import { Home } from '../components/home/home';

@Component({
  selector: 'app-root',
  imports: [Login, Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
