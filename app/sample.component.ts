import {Component} from '@angular/core';
@Component({
	selector : 'sample',
	template : `<div class="container" *ngIf="showHeader">

	 			<h1>this is my sample page</h1>
								<br>
				He is {{name| uppercase  }}<br>
				<img [src]="imageUrl" width="100" height="100" /><br><br>
				<button class="btn btn-primary" (click)="runMe()">click me!</button><br>
				<input type="text"  [(ngModel)]="realName" (keyup.enter)="getValues($event)" />
				{{realName}}

				<br>
				<ul *ngFor =" let  item of items">
				<li>{{item}}</li>
				</ul>
				<br>
				Display Price : {{price | currency :'INR' : 'true'}}
				</div>
				`
})
 // we can use "bind-src or  [src] in component class"
export class SampleComponent{
	private name : string;
	private imageUrl : string;
	private realName : string;
	private showHeader : boolean;
	private items : string[];
	private price : number;

	

	constructor(){
		this.name = "Scott decot"
		this.imageUrl="./app/components/d3.jpg"
		this.realName ="Naveen";
		this.showHeader =true;
		this.items = ["tv","fan","AC","car"];
		this.price =1500;
	}


      runMe() {
      	

	console.log('hey wait !!,did you click me?');
}
getValues(umaq :any){
	console.log(umaq.target.value)
}
}