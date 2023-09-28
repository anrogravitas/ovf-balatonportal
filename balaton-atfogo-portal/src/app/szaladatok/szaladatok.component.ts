import {  Component, HostListener } from '@angular/core';
/*npm i @angular/animations*/

@Component({
  selector: 'app-szaladatok',
  templateUrl: './szaladatok.component.html',
  styleUrls: ['./szaladatok.component.css?v=1'],
  
})
export class SzaladatokComponent{
  currentTime: Date | undefined;
  displayedPlatforms: any[] = [];
  currentIndex = 0;

  meroplatformok = [
    { name: 'Siófoki-medence (mérőplatform)', szellokes: 46.95, szelirany: 18.01, szelsebesseg: '6.2' },
  { name: 'Szigligeti-medence (mérőplatform)', szellokes: 46.75, szelirany: 17.41, szelsebesseg: '6.1' },
  { name: 'Balatonszemesi-medence (mérőplatform)', szellokes: 46.85, szelirany: 17.79, szelsebesseg: '12.00' },
  { name: 'Keszthelyi-medence (mérőplatform)', szellokes: 46.73, szelirany: 17.27, szelsebesseg: '6.20' },
  { name: 'Balatonaliga', szellokes: 46.99, szelirany: 18.17, szelsebesseg: '8.12' },
  { name: 'Balatonfüzfő (Balaton)', szellokes: 47.06, szelirany: 18.04, szelsebesseg: '5.12' },
  { name: 'Fonyód', szellokes: 46.75, szelirany: 17.56, szelsebesseg: '6.14' },
  { name: 'Siófok', szellokes: 46.92, szelirany: 18.05, szelsebesseg: '6.32' },
  { name: 'Keszthely', szellokes: 46.75, szelirany: 17.25, szelsebesseg: '2.12' },
  { name: 'Badacsony', szellokes: 46.79, szelirany: 17.51, szelsebesseg: '4.12' },
  { name: 'Tihany rév', szellokes: 46.88, szelirany: 17.89, szelsebesseg: '5.12' },
  { name: 'Balatonakali', szellokes: 46.88, szelirany: 17.74, szelsebesseg: '8.12' },
  { name: 'Siófok, gát alatt', szellokes: 46.88, szelirany: 18.05, szelsebesseg: '6.92' },
  { name: 'Balaton átlag', szellokes: 46.88, szelirany: 17.82, szelsebesseg: '6.16' },
  { name: 'Balatonmáriafürdő', szellokes: 46.71, szelirany: 17.38, szelsebesseg: '7.12' },
  { name: 'Balatonszemes', szellokes: 46.82, szelirany: 17.77, szelsebesseg: '6.79' },
  { name: 'Siójut', szellokes: 46.88, szelirany: 18.14, szelsebesseg: '6.92' },
  { name: 'Balatonszemes', szellokes: 46.79, szelirany: 17.77, szelsebesseg: '4.12' },
  { name: 'Ábrahámhegy', szellokes: 46.81, szelirany: 17.57, szelsebesseg: '6.15' },
  { name: 'Alsóörs', szellokes: 46.98, szelirany: 17.97, szelsebesseg: '6.40' },
  { name: 'Balatonmáriafürdő', szellokes: 46.69, szelirany: 17.38, szelsebesseg: '52.00' },
  { name: 'Balatonederics', szellokes: 46.81, szelirany: 17.38, szelsebesseg: '2.00' },
  { name: 'Balatonakali', szellokes: 46.90, szelirany: 17.74, szelsebesseg: '6.50' },
  { name: 'Balatonkenese', szellokes: 47.03, szelirany: 18.13, szelsebesseg: '6.60' },
  { name: 'Siófoki-medence (mérőplatform)', szellokes: 46.95, szelirany: 18.01, szelsebesseg: '2.00' },
  { name: 'Keszthelyi-medence (mérőplatform)', szellokes: 46.73, szelirany: 17.27, szelsebesseg: '22.00' },
  { name: 'Balatonszemesi-medence (mérőplatform)', szellokes: 46.85, szelirany: 17.79, szelsebesseg: '82.00' },
  { name: 'Szigligeti-medence (mérőplatform)', szellokes: 46.75, szelirany: 17.41, szelsebesseg: '92.00' },
  { name: 'Siófok', szellokes: 46.90, szelirany: 18.04, szelsebesseg: '89.00' }
];

  ngOnInit() {
    //Initialze the clock
    /*setInterval(() => {
      this.currentTime = new Date();
    }, 1000);*/

    this.updateTime();

    // Initialize the displayed platforms with the first 5 items
    this.updateDisplayedPlatforms();

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
