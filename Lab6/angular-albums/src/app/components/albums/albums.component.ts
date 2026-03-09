import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { AlbumModel } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: AlbumModel[] = [];
  loading: boolean = true;

  constructor(
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
        
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Server error:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
      this.cdr.detectChanges();
    });
  }
}