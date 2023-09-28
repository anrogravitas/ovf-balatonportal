import { Component } from '@angular/core';

@Component({
  selector: 'app-leghomerseklet',
  templateUrl: './leghomerseklet.component.html',
  styleUrls: ['./leghomerseklet.component.css']
})
export class LeghomersekletComponent {
  currentTime: Date | undefined;
  displayedPlatforms: any[] = [];
  currentIndex = 0;

  meroplatformok = [
  { name: 'Siófoki-medence (mérőplatform)', leghomerseklet: 30 },
  { name: 'Szigligeti-medence (mérőplatform)', leghomerseklet: 31  },
  { name: 'Balatonszemesi-medence (mérőplatform)', leghomerseklet: 31 },
  { name: 'Keszthelyi-medence (mérőplatform)', leghomerseklet: 29  },
  { name: 'Balatonaliga', leghomerseklet: 30},
  { name: 'Balatonfüzfő (Balaton)', leghomerseklet: 33 },
  { name: 'Fonyód', leghomerseklet: 32 },
  { name: 'Siófok', leghomerseklet: 29 },
  { name: 'Keszthely', leghomerseklet: 27 },
  { name: 'Badacsony', leghomerseklet: 30 },
  { name: 'Tihany rév', leghomerseklet: 31 },
  { name: 'Balatonakali', leghomerseklet: 32 },
  { name: 'Siófok, gát alatt', leghomerseklet: 30 },
  { name: 'Balaton átlag', leghomerseklet: 30 },
  { name: 'Balatonmáriafürdő', leghomerseklet: 29 },
  { name: 'Balatonszemes', leghomerseklet: 28 },
  { name: 'Siójut', leghomerseklet: 30 },
  { name: 'Balatonszemes', leghomerseklet: 31 },
  { name: 'Ábrahámhegy', leghomerseklet: 32 },
  { name: 'Alsóörs', leghomerseklet: 31 },
  { name: 'Balatonmáriafürdő', leghomerseklet: 30 },
  { name: 'Balatonederics', leghomerseklet: 29 },
  { name: 'Balatonakali', leghomerseklet: 30 },
  { name: 'Balatonkenese', leghomerseklet: 31 },
  { name: 'Siófoki-medence (mérőplatform)', leghomerseklet: 33 },
  { name: 'Keszthelyi-medence (mérőplatform)', leghomerseklet: 31 },
  { name: 'Balatonszemesi-medence (mérőplatform)', leghomerseklet: 32 },
  { name: 'Szigligeti-medence (mérőplatform)', leghomerseklet: 33 },
  { name: 'Siófok', leghomerseklet: 34 }
];

  ngOnInit() {
    //Initialze the clock
   /* setInterval(() => {
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
