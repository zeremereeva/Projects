import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService, IHero } from '../data.service';
import { VideoComponent } from '../shared/video/video.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  heroes: IHero[] = [];
  heroIndex = 0;

  constructor(private dialog: MatDialog, private srv: DataService) {}

  ngOnInit(): void {
    this.heroes = this.srv.data;
  }

  nextSlide() {
    this.heroIndex =
      this.heroIndex === this.heroes.length - 1 ? 0 : this.heroIndex + 1;
  }

  prevSlide() {
    this.heroIndex =
      this.heroIndex === 0 ? this.heroes.length - 1 : this.heroIndex - 1;
  }

  openDialog() {
    this.dialog.open(VideoComponent);
  }
}
