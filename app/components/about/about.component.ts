import {Component} from '@angular/core'
@Component({
	moduleId : module.id,
	selector : 'about',
	templateUrl :'about.component.html'
})
export class AboutComponent {
	private message1 : string;


	 constructor()
	 {
this.message1= " i am from about and constructor";

	 }

}