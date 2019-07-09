import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      // tslint:disable-next-line:object-literal-key-quotesaa
      // tslint:disable-next-line:object-literal-key-quotes
      'Authorization': 'Bearer BQAc-fWOaetGy1LBN7IgofKLBnNGU-ddjQqeMO9mHKaSE70yGe2g8yCXSX7JKaX4jAf8_qvgOpekqWotMNQ',
    });

    return this.http.get(url, {headers});
  }


  getNewReleases() {

      return this.getQuery('browse/new-releases?limit=20')
                // tslint:disable-next-line:no-string-literal
                .pipe(map( data => data['albums'].items));
  }

  getArtista(termino: string) {

      return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                // tslint:disable-next-line:no-string-literal
                .pipe(map(data => data['artists'].items));
  }
}
