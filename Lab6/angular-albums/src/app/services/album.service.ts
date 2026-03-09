import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlbumModel } from '../models/album.model';
import { PhotoModel } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<AlbumModel[]> {
    return this.http.get<AlbumModel[]>(`${this.apiUrl}/albums`);
  }

  getAlbum(id: number): Observable<AlbumModel> {
    return this.http.get<AlbumModel>(`${this.apiUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<PhotoModel[]> {
    return this.http.get<PhotoModel[]>(`${this.apiUrl}/albums/${id}/photos`);
  }

  updateAlbum(album: AlbumModel): Observable<AlbumModel> {
    return this.http.put<AlbumModel>(`${this.apiUrl}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/albums/${id}`);
  }
}