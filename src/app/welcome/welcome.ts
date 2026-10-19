import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { WelcomeData } from '../service/data/welcome-data';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class WelcomeComponent implements OnInit {
  welcomeMessageFromService: string = '';
  errorMessageFromService: string = '';
  name = '';

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeData,
    private cdr: ChangeDetectorRef // 1. Inject ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message;
    this.cdr.detectChanges(); // 2. Force UI to refresh immediately
  }

  handleErrorResponse(error: any) {
    this.errorMessageFromService = error.error.message;
    this.cdr.detectChanges(); // 3. Force UI to refresh immediately on error too
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe({
      next: (response) => this.handleSuccessfulResponse(response),
      error: (error) => this.handleErrorResponse(error)
    });
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe({
      next: (response) => this.handleSuccessfulResponse(response),
      error: (error) => this.handleErrorResponse(error)
    });
  }
}