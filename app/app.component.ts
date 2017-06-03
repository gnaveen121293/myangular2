import {Component} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {SampleComponent} from './sample.component';
@Component({
	selector : 'my-app',
	template : `<div   class="container" *ngIf="showHeader"><h1>my ang2 application</h1>

	
	<sample></sample>
	</div>`
})
export class AppComponent{
private showHeader : boolean;
constructor()
{
	this.showHeader =true;
}
}