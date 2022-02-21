import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  //se cambia de idioma
  changeLanguageToSpanish():void{
    this.translate.use('es');
    console.log('Idioma español' + +" "+this.translate.instant('header.home'));
    console.log(this.translate);
    console.log(this.translate.store.currentLang);
    
  }
  changeLanguageToEnglish():void{
    this.translate.use('en');
    console.log('Idioma inglés' +" "+ this.translate.instant('header.home'));
   /* console.log(this.translate);
    console.log(this.translate.store);
    console.log(this.translate.store.currentLang);
    */
    
  }


  changeLanguage():void{
    if(this.translate.store.currentLang=='es')
    {
      this.translate.use('en');
    console.log('Idioma inglés' +" "+ this.translate.instant('header.home'));
    }else{
      this.translate.use('es');
      console.log('Idioma español' + +" "+this.translate.instant('header.home'));
    }
  }

}
