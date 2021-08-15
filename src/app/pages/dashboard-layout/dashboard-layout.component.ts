import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getAllListPosts().subscribe();
  }
}
