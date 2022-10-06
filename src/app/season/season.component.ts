import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { VideoComponent } from '../shared/video/video.component';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss'],
})
export class SeasonComponent implements OnInit {
  seasonNumber: number = 1;
  text = [
    {
      title: 'season 1',
    },
    {
      title: 'season 2',
    },
  ];

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      const seasonNumber = param.get('seasonNumber');

      if (seasonNumber) {
        this.seasonNumber = +seasonNumber;
        console.log('season', this.seasonNumber);
        console.log('data', this.text[this.seasonNumber - 1]);
      }
    });
  }

  openDialog() {
    this.dialog.open(VideoComponent);
  }
}
