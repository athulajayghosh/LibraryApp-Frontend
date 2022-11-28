import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  BookName=""
  Author=""
  Description=""
  Publisher=""
  Language=""
  Distrbutor=""
  ReleaseYear=""
  Price=""
  src=""






  readValues = ()=>
  {
    let entryData:any=    {
      src:this.src,
      BookName:this.BookName,
      Author:this.Author,
      Description:this.Description,
      Publisher:this.Publisher,
      Language:this.Language,
      Distrbutor:this.Distrbutor,
      ReleaseYear:this.ReleaseYear,
      Price:this.Price
     
      
    }
     console.log(entryData);
  
  }
  



}
