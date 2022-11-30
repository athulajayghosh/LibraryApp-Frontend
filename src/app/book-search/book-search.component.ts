import { Component } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  searchbook=""
  searchValues=()=>{
    let searchbookdata:any={
      searchbook:this.searchbook
    }   
  console.log(searchbookdata);
  }
}
