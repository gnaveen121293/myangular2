"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SampleComponent = (function () {
    function SampleComponent() {
        this.name = "Scott decot";
        this.imageUrl = "./app/components/d3.jpg";
        this.realName = "Naveen";
        this.showHeader = true;
        this.items = ["tv", "fan", "AC", "car"];
        this.price = 1500;
    }
    SampleComponent.prototype.runMe = function () {
        console.log('hey wait !!,did you click me?');
    };
    SampleComponent.prototype.getValues = function (umaq) {
        console.log(umaq.target.value);
    };
    return SampleComponent;
}());
SampleComponent = __decorate([
    core_1.Component({
        selector: 'sample',
        template: "<div class=\"container\" *ngIf=\"showHeader\">\n\n\t \t\t\t<h1>this is my sample page</h1>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\tHe is {{name| uppercase  }}<br>\n\t\t\t\t<img [src]=\"imageUrl\" width=\"100\" height=\"100\" /><br><br>\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"runMe()\">click me!</button><br>\n\t\t\t\t<input type=\"text\"  [(ngModel)]=\"realName\" (keyup.enter)=\"getValues($event)\" />\n\t\t\t\t{{realName}}\n\n\t\t\t\t<br>\n\t\t\t\t<ul *ngFor =\" let  item of items\">\n\t\t\t\t<li>{{item}}</li>\n\t\t\t\t</ul>\n\t\t\t\t<br>\n\t\t\t\tDisplay Price : {{price | currency :'INR' : 'true'}}\n\t\t\t\t</div>\n\t\t\t\t"
    })
    // we can use "bind-src or  [src] in component class"
    ,
    __metadata("design:paramtypes", [])
], SampleComponent);
exports.SampleComponent = SampleComponent;
//# sourceMappingURL=sample.component.js.map