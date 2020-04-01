import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  listCountry: any = []
  isScrolled: boolean = false
  constructor(private http: HttpClient) { }

  // Api Read
  ngOnInit() {
    this.http.get('https://coronavirus-19-api.herokuapp.com/countries/')
      .subscribe(res => {
        this.listCountry = res
      },
        (err) => {
          alert('Failed loading json data');
        });
  }

  //scrol listening
  @HostListener('window:scroll', ['$event']) onWindowScroll(e) {
    let scroll = e.target['scrollingElement'].scrollTop
    console.log(scroll)
    if (scroll > 100) {
      this.isScrolled = true
    } else {
      this.isScrolled = false
    }

  }
  //back to top 
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    // window.scrollTo(0, 0)
  }


}
