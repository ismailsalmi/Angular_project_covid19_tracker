import { Component, HostListener } from '@angular/core';
// Angular http request
import { HttpClient } from '@angular/common/http';
// Angular snackBar import 
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  states: any = [
    'cases', 'deaths', 'active',
    'critical', 'todayCases',
    'todayDeaths']
  listCountry: any = []
  isScrolled: boolean = false
  isNotData: boolean = false
  menuItemSalect = 'cases'
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  // Api Read
  ngOnInit() {
    this.http.get('https://coronavirus-19-api.herokuapp.com/countries/')
      .subscribe(res => {
        this.listCountry = res
      },
        (err) => {
          this.openSnackBar('Failed loading json data', '');
          this.isNotData = true
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
  toTop() {
    window.scrollTo(0, 0)
  }
  // SnackBar methods
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  // Refresh location page
  refreshPage() {
    window.location.reload();
  }
  // Select menu items
  onseSelectMenu(pText :string)
  {
    this.menuItemSalect = pText;
  }

}
