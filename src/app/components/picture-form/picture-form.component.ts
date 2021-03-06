import {Component, OnInit} from '@angular/core';
import {PictureService} from '@app/services/picture.service';
import {Picture} from '@app/components/picture-form/Picture';

@Component({
  selector: 'app-picture-form',
  templateUrl: './picture-form.component.html',
  styleUrls: ['./picture-form.component.css']
})
export class PictureFormComponent implements OnInit {

  pictureURL = '/assets/picture/defaut.jpg';
  fileToUpload: File = null;
  idRecipe: string;

  constructor(private pictureService: PictureService) {
  }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.pictureURL = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(idRecipe) {
    let picture;
    picture = new Picture();
    picture.idRecipe = 1;
    picture.picture = 'assets/img/poulet.jpeg';
    this.pictureService.post(picture).subscribe(
      data => {
        console.log('done');
      }
    );
  }


}
