import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReviewDTO} from "@app/DTOs/review-dto";
import {AuthenticationService} from "@app/services/authentication.service";

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  @Output()
  private reviewPosted:EventEmitter<ReviewDTO> = new EventEmitter<ReviewDTO>()

  public _form: FormGroup = this.fb.group({
    rate: this.fb.control("", Validators.required),
    review: this.fb.control("")
  });



  constructor(private fb: FormBuilder,
              private _authService: AuthenticationService) {
  }

  ngOnInit() {

  }

  postReview() {
    this.reviewPosted.next({
      idRecipe:-1,
      idUser:this._authService.currentUserValue.idUser,
      rate:this._form.get("rate").value,
      reviewMessage:this._form.get("review").value
    })

    this._form.reset();
  }

  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }

  get authService(): AuthenticationService {
    return this._authService;
  }

  set authService(value: AuthenticationService) {
    this._authService = value;
  }
}
