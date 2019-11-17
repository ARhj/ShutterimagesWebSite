import { Component, Input, Output } from '@angular/core';
import { CommonService } from '../../Services/common.service';
import { EventEmitter } from  '@angular/core';

@Component({
  selector: 'galleryPhotos',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers : [CommonService]
})
export class GalleryComponent { 

  @Input()
  imageNames: string[];

  @Output()
 public imageClicked : EventEmitter<string> = new EventEmitter<string>();

  public constructor(private service : CommonService)
  {

  }
 public SetImage(obj)
  {
   this.imageClicked.emit(obj);
  }
}
