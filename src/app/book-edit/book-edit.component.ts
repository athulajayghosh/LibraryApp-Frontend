import { Component } from '@angular/core';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {
  editbook=""
  editValues=()=>{
    let editbookdata:any={
      editbook:this.editbook
    }   
  console.log(editbookdata);
  }

}
