import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
   template: `
    <ul>
      <li *ng-for="#movie of movies; #i = index">
        {{ movie }}
        <button (click)="removeMovie(i)">Remove Movie</button>
      </li>
    </ul>
    <input #currname (keyup)="doneTyping($event)">
    <button (click)="addMovie(currname.value)">Add Movie</button>
          `,
  directives: [NgFor]
})
class TodoList {
  movies: Array<string>;
  
  constructor() {
    this.movies = JSON.parse(localStorage['movies']) || [];
  }
  
  addMovie(movie: string) {
    this.movies.push(movie);
    localStorage['movies'] = JSON.stringify(this.movies);
  }
  
  removeMovie(i: number) {
    this.movies.splice(i, 1);
    localStorage['movies'] = JSON.stringify(this.movies);
  }
  
  doneTyping($event) {
    if($event.which === 13) {
      this.addMovie($event.target.value);
      $event.target.value = null;
    }
  }
}


bootstrap(TodoList);