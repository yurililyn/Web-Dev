import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { AlbumModel } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album!: AlbumModel;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error when turning on the album:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  saveTitle(): void {
    this.albumService.updateAlbum(this.album).subscribe(() => {
      alert('Album title updated successfully!');
    });
  }

  goBack(): void {
    this.location.back();
  }
}