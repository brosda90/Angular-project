import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss'
})
export class SlideshowComponent implements OnInit  {
 
    images = ['cpu.jpg','motherboard.jpg','repairing.jpg'];
    headlines = ['Hardware repair & maintenance','We repair your broken stuff','fixing GPUs mainboards cpus and consoles'];
    currentImage = 0;
    showImage = true;
  
    ngOnInit(){
      this.updateImage();
    }
  
    updateImage(){
      setInterval(() => {
        this.currentImage++;
        this.currentImage = this.currentImage % this.images.length;
        this.showImage = false;
  
        setTimeout(() => {
          this.showImage = true;
        }, 10);
      }, 8000);
    }
  
}
