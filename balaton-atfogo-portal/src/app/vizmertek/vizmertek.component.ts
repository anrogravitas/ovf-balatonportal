import { Component } from '@angular/core';

@Component({
  selector: 'app-vizmertek',
  templateUrl: './vizmertek.component.html',
  styleUrls: ['./vizmertek.component.css']
})
export class VizmertekComponent {
  currentTime: Date | undefined;
  displayedPlatforms: any[] = [];
  currentIndex = 0;

  meroplatformok = [
  { name: 'Siófoki-medence (mérőplatform)', vizallas: 70 },
  { name: 'Szigligeti-medence (mérőplatform)', vizallas: 30 },
  { name: 'Balatonszemesi-medence (mérőplatform)', vizallas: 13 },
  { name: 'Keszthelyi-medence (mérőplatform)', vizallas: 75 },
  { name: 'Balatonaliga', vizallas: 70 },
  { name: 'Balatonfüzfő (Balaton)', vizallas: 46 },
  { name: 'Fonyód', vizallas: 89 },
  { name: 'Siófok', vizallas: 56 },
  { name: 'Keszthely', vizallas: 24 },
  { name: 'Badacsony', vizallas: 69 },
  { name: 'Tihany rév', vizallas: 81 },
  { name: 'Balatonakali', vizallas: 10 },
  { name: 'Siófok, gát alatt', vizallas: 59 },
  { name: 'Balaton átlag', vizallas: 6 },
  { name: 'Balatonmáriafürdő', vizallas: 58 },
  { name: 'Balatonszemes', vizallas: 55 },
  { name: 'Siójut', vizallas: 32 },
  { name: 'Balatonszemes', vizallas: 47},
  { name: 'Ábrahámhegy', vizallas: 7 },
  { name: 'Alsóörs', vizallas: 96  },
  { name: 'Balatonmáriafürdő', vizallas: 92},
  { name: 'Balatonederics', vizallas: 88},
  { name: 'Balatonakali', vizallas: 58 },
  { name: 'Balatonkenese', vizallas: 27 },
  { name: 'Siófoki-medence (mérőplatform)', vizallas: 70 },
  { name: 'Keszthelyi-medence (mérőplatform)', vizallas: 75 },
  { name: 'Balatonszemesi-medence (mérőplatform)', vizallas: 13 },
  { name: 'Szigligeti-medence (mérőplatform)', vizallas: 5},
  { name: 'Siófok', csapadék: 7 }
];

  ngOnInit() {
    //Initialze the clock
    /*setInterval(() => {
      this.currentTime = new Date();
    }, 1000);*/

    this.updateTime();

    // Initialize the displayed platforms with the first 5 items
    this.updateDisplayedPlatforms();
    // Set up a timer to update the displayed platforms every 10 seconds
    setInterval(() => {
      this.updateDisplayedPlatforms();
    }, 20000);
  }

  updateDisplayedPlatforms() {
    this.displayedPlatforms = [];
    let numItemsToDisplay = 5;
    //Rows size
    if (window.innerWidth == 1080) {
      numItemsToDisplay = 10;
    }
    if(window.innerWidth == 1920){
      numItemsToDisplay = 5;
    }
    for (let i = this.currentIndex; i < this.currentIndex + numItemsToDisplay; i++) {
      // Use modulo to loop through the data
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
