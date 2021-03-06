import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RecipeDTO, RecipeList} from '../DTOs/recipe-dto';
import {environment} from '@environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private static search = '';
  private static URL = '/api/recipes/';

  constructor(public http: HttpClient) {
  }

  query(): Observable<RecipeList> {
    return this.http.get<RecipeList>(environment.apiUrl + RecipeService.URL);
  }

  queryPseudo(): Observable<RecipeList> {
    return this.http.get<RecipeList>(environment.apiUrl + RecipeService.URL + 'pseudo');
  }

  queryText(text: string): Observable<RecipeList> {
    text.replace(' ', '_');
    return this.http.get<RecipeList>(environment.apiUrl + RecipeService.URL + 'text=' + text);
  }

  queryId(id: number): Observable<RecipeList> {
    return this.http.get<RecipeList>(environment.apiUrl + RecipeService.URL + 'id=' + id);
  }

  queryUser(idUser: number): Observable<RecipeList> {
    return this.http.get<RecipeList>(environment.apiUrl + RecipeService.URL + 'user=' + idUser);
  }

  post(ingredient: RecipeDTO): Observable<RecipeDTO> {
    console.log(environment.apiUrl + RecipeService.URL, ingredient);
    return this.http.post<RecipeDTO>(environment.apiUrl + RecipeService.URL, ingredient);
  }

  put(recipe: RecipeDTO): Observable<any> {
    return this.http.put(environment.apiUrl + RecipeService.URL, recipe);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${RecipeService.URL}${id}`);
  }
}
