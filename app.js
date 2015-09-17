var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var TodoList = (function () {
    function TodoList() {
        this.movies = JSON.parse(localStorage['movies']) || [];
    }
    TodoList.prototype.addMovie = function (movie) {
        this.movies.push(movie);
        localStorage['movies'] = JSON.stringify(this.movies);
    };
    TodoList.prototype.removeMovie = function (i) {
        this.movies.splice(i, 1);
        localStorage['movies'] = JSON.stringify(this.movies);
    };
    TodoList.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addMovie($event.target.value);
            $event.target.value = null;
        }
    };
    TodoList = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: "\n    <ul>\n      <li *ng-for=\"#movie of movies; #i = index\">\n        {{ movie }}\n        <button (click)=\"removeMovie(i)\">Remove Movie</button>\n      </li>\n    </ul>\n    <input #currname (keyup)=\"doneTyping($event)\">\n    <button (click)=\"addMovie(currname.value)\">Add Movie</button>\n          ",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoList);
    return TodoList;
})();
angular2_1.bootstrap(TodoList);
//# sourceMappingURL=app.js.map