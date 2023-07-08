import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/User Profile/user-profile.service';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css'],
})
export class MainProfileComponent implements OnInit {
  user: any;
  respomseError = '';
  constructor(
    public service: UserProfileService,
    public auth: AuthenticationService,
    private routeService: Router
  ) {}

  form = new FormGroup({
    fname: new FormControl<string>(``, Validators.maxLength(15)),
    lname: new FormControl<string>(``, Validators.maxLength(15)),
  });

  ngOnInit(): void {
    this.service.getUser().subscribe({
      next: (data) => {
        this.user = data;
        this.form.controls.fname.setValue(this.user.fname);
        this.form.controls.lname.setValue(this.user.lname);
      },
      error: (err) => {
        console.log(err);
        this.respomseError = err.error;
      },
    });
  }

  update() {
    let updatedU = {
      fname: this.form.controls.fname.value,
      lname: this.form.controls.lname.value,
    };
    this.service.EditUser(updatedU).subscribe({
      next: () => {
        this.user = updatedU;
        // console.log(updatedU)
      },
      error: (err) => {
        // console.log(err)
      },
    });
    window.location.reload();
  }

  delete() {
    let msg = `Do you want to delete your account?`;
    if (confirm(msg) == true) {
      this.service.deleteUser().subscribe();
      localStorage.clear();
      this.auth.isLoggedIn$.next(false);
      this.routeService.navigateByUrl('');
    }
  }
}
