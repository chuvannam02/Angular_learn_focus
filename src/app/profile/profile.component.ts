import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private route: ActivatedRoute) { }
  // route parameter
  username$ = this.route.paramMap
  .pipe(
    map((params: ParamMap) => params.get('username'))
  );
}
