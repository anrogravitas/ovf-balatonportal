import { Component } from '@angular/core';

@Component({
  selector: 'app-csapadek',
  templateUrl: './csapadek.component.html',
  styleUrls: ['./csapadek.component.css']
})
export class CsapadekComponent {
  currentTime: Date | undefined;

  //Ezt a tömböt jelenítem meg
  displayedPlatforms: any[] = [];
  currentIndex = 0;

  meroplatformok = [
  { name: 'Siófoki-medence (mérőplatform)', csapadek: 70 },
  { name: 'Szigligeti-medence (mérőplatform)', csapadek: 30 },
  { name: 'Balatonszemesi-medence (mérőplatform)', csapadek: 13 },
  { name: 'Keszthelyi-medence (mérőplatform)', csapadek: 75 },
  { name: 'Balatonaliga', csapadek: 70 },
  { name: 'Balatonfüzfő (Balaton)', csapadek: 46 },
  { name: 'Fonyód', csapadek: 89 },
  { name: 'Siófok', csapadek: 56 },
  { name: 'Keszthely', csapadek: 24 },
  { name: 'Badacsony', csapadek: 69 },
  { name: 'Tihany rév', csapadek: 81 },
  { name: 'Balatonakali', csapadek: 10 },
  { name: 'Siófok, gát alatt', csapadek: 59 },
  { name: 'Balaton átlag', csapadek: 6 },
  { name: 'Balatonmáriafürdő', csapadek: 58 },
  { name: 'Balatonszemes', csapadek: 55 },
  { name: 'Siójut', csapadek: 32 },
  { name: 'Balatonszemes', csapadek: 47},
  { name: 'Ábrahámhegy', csapadek: 7 },
  { name: 'Alsóörs', csapadek: 96  },
  { name: 'Balatonmáriafürdő', csapadek: 92},
  { name: 'Balatonederics', csapadek: 88},
  { name: 'Balatonakali', csapadek: 58 },
  { name: 'Balatonkenese', csapadek: 27 },
  { name: 'Siófoki-medence (mérőplatform)', csapadek: 70 },
  { name: 'Keszthelyi-medence (mérőplatform)', csapadek: 75 },
  { name: 'Balatonszemesi-medence (mérőplatform)', csapadek: 13 },
  { name: 'Szigligeti-medence (mérőplatform)', csapadek: 5},
  { name: 'Siófok', csapadék: 7 }
];

  ngOnInit() {
    this.updateTime();
    //Első 5 elem inízializálása
    this.updateDisplayedPlatforms();
    
    // Az éppen aktuálisan megjelenő adatok 20 másodpercenkénti frissítése
    setInterval(() => {
      this.updateDisplayedPlatforms();
    }, 20000);
  }

  updateDisplayedPlatforms() {
    this.displayedPlatforms = [];
    let numItemsToDisplay = 5;

    //Képernyő szélessége alapján állítom be, hogy hány elemet jelenítsünk meg
    if (window.innerWidth == 1080) {
      numItemsToDisplay = 10;
    }
    if(window.innerWidth == 1920){
      numItemsToDisplay = 5;
    }

    //Megjeleníteni kívánt elemek betöltése  a displayedPlatforms tömbbe
    for (let i = this.currentIndex; i < this.currentIndex + numItemsToDisplay; i++) {
      const index = i % this.meroplatformok.length;
      this.displayedPlatforms.push(this.meroplatformok[index]);
    }
    this.currentIndex = (this.currentIndex + numItemsToDisplay) % this.meroplatformok.length;
  }
  //Figyeli az oszlopok számát
  isThreeTd(): boolean {
    const tdElements = document.querySelectorAll('th'); 
    return tdElements.length === 4;
  }
  //Az oszlopok száma alapján módosítja a első oszlop szélességét
  getMarqueeWidth(): number {
    if (window.innerWidth === 1920) {
      return this.isThreeTd() ? 600 : 1300;
    } else if (window.innerWidth === 1080) {
      return this.isThreeTd() ? 380 : 700;
    } else {
      return 0;
    }
  }
  //Óra beállítása 
  updateTime(): void {
    this.currentTime = new Date();
    setTimeout(() => {
      this.updateTime();
    }, 1000); 
  }
}
