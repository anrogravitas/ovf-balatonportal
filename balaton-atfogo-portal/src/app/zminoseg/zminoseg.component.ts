import { Component } from '@angular/core';

@Component({
  selector: 'app-zminoseg',
  templateUrl: './zminoseg.component.html',
  styleUrls: ['./zminoseg.component.css']
})
export class ZminosegComponent {
  currentTime: Date | undefined;
  displayedPlatforms: any[] = [];
  currentIndex = 0;

  meroplatformok = [
  { name: 'Siófoki-medence (mérőplatform)', oxigen: 46.70, ph: 1.01, zavarossag: '6.2' },
  { name: 'Szigligeti-medence (mérőplatform)', oxigen: 46.05, ph: 1.40, zavarossag: '6.1' },
  { name: 'Balatonszemesi-medence (mérőplatform)', oxigen: 46.13, ph: 1.78, zavarossag: '12' },
  { name: 'Keszthelyi-medence (mérőplatform)', oxigen: 46.75, ph: 1.27, zavarossag: '6.2' },
  { name: 'Balatonaliga', oxigen: 46.70, ph: 1.16, zavarossag: '8.12' },
  { name: 'Balatonfüzfő (Balaton)', oxigen: 47.46, ph: 1.03, zavarossag: '5.12' },
  { name: 'Fonyód', oxigen: 46.89, ph: 1.55, zavarossag: '6.14' },
  { name: 'Siófok', oxigen: 46.56, ph: 1.04, zavarossag: '6.32' },
  { name: 'Keszthely', oxigen: 46.24, ph: 1.24, zavarossag: '2.12' },
  { name: 'Badacsony', oxigen: 46.69, ph: 1.50, zavarossag: '4.12' },
  { name: 'Tihany rév', oxigen: 46.81, ph: 1.89, zavarossag: '5.12' },
  { name: 'Balatonakali', oxigen: 46.10, ph: 1.74, zavarossag: '8.12' },
  { name: 'Siófok, gát alatt', oxigen: 46.59, ph: 1.04, zavarossag: '6.92' },
  { name: 'Balaton átlag', oxigen: 46.06, ph: 1.81, zavarossag: '6.16' },
  { name: 'Balatonmáriafürdő', oxigen: 46.58, ph: 1.38, zavarossag: '7.12' },
  { name: 'Balatonszemes', oxigen: 46.55, ph: 1.77, zavarossag: '6.79' },
  { name: 'Siójut', oxigen: 46.32, ph: 1.14, zavarossag: '6.92' },
  { name: 'Balatonszemes', oxigen: 46.47, ph: 1.76, zavarossag: '4.12' },
  { name: 'Ábrahámhegy', oxigen: 46.72, ph: 1.57, zavarossag: '6.15' },
  { name: 'Alsóörs', oxigen: 46.96, ph: 1.97, zavarossag: '6.4' },
  { name: 'Balatonmáriafürdő', oxigen: 46.92, ph: 1.38, zavarossag: '52' },
  { name: 'Balatonederics', oxigen: 46.88, ph: 1.37, zavarossag: '2' },
  { name: 'Balatonakali', oxigen: 46.58, ph: 1.73, zavarossag: '6.5' },
  { name: 'Balatonkenese', oxigen: 47.27, ph: 1.12, zavarossag: '6.6' },
  { name: 'Siófoki-medence (mérőplatform)', oxigen: 46.70, ph: 1.01, zavarossag: '2' },
  { name: 'Keszthelyi-medence (mérőplatform)', oxigen: 46.75, ph: 1.27, zavarossag: '22' },
  { name: 'Balatonszemesi-medence (mérőplatform)', oxigen: 46.13, ph: 1.78, zavarossag: '82' },
  { name: 'Szigligeti-medence (mérőplatform)', oxigen: 46.05, ph: 1.40, zavarossag: '92' },
  { name: 'Siófok', oxigen: 46.07, ph: 1.04, zavarossag: '89' }
];

  ngOnInit() {
    //Initialze the clock
    /*setInterval(() => {
      this.currentTime = new Date();

    }, 1000);*/
    /*const exactTimer = () => {
      let time_now = Date.now();
      if ((time_now - start) % 60000 < 59998) {
          setTimeout(exactTimer, 0);
          //console.log((time_now - start) % 60000)
      }
      else {
          setTimeout(exactTimer, 59000);
          console.log((time_now - start) % 60000, (time_now - start + 2) / 60000, time_now - start);
          getRawData((data) => { setActualData(data) })
      }
  
  }*/
  this.updateTime();
    // Initialize the displayed platforms with the first 5 items
    this.updateDisplayedPlatforms();
    // Set up a timer to update the displayed platforms every 10 seconds
    setInterval(() => {
      this.updateDisplayedPlatforms();
    }, 2000000);
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
