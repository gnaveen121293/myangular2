import {Component} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component'
@Component({
	selector : 'my-app',
	template : `<div><h1>my ang2 application</h1>
	<my-home></my-home>
	<about></about></div>`
})
export class AppComponent{

}