import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
  selector: '[appColor]',
})
export class ColorDirective implements OnInit{

   @HostListener('window:keyup', ['$event']) private keyEvent(event: KeyboardEvent) {
        if (event.key == "ArrowUp") {
            this.el.nativeElement.style.color = 'blue';
        } 
        
        else if (event.code == "ArrowDown") {
            this.el.nativeElement.style.color = 'red';
        }

        else if (event.key == "ArrowLeft") {
            this.el.nativeElement.style.color = 'green';
        }
        else if (event.key == "ArrowRight") {
            this.el.nativeElement.style.color = 'pink';
        }
   }
    

    
  constructor(private el: ElementRef<any>) {
    
  }
  ngOnInit() {
  }
}