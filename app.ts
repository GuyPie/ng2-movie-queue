import {Component, View, bootstrap, NgFor, NgModel} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  directives: [NgFor],
  template: `<input placeholder="New movie" [ng-model]="currName">
    <button (click)="addMovie($event)"></button>`
})
// Component controller
class Movies {
  movies: Array<string>;
  currName: string;
  
   constructor() {
     this.movies = [];
   }
  
  addMovie(event) {
    this.movies.push(this.currName);
    console.log(this.movies);
  }
};


bootstrap(Movies);