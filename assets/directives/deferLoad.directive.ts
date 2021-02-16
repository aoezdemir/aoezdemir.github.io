import {AfterViewInit, Directive, ElementRef, EventEmitter, Output} from '@angular/core';

@Directive({
    selector: '[deferLoad]'
})
export class DeferLoadDirective implements AfterViewInit {
    @Output() public deferLoad: EventEmitter<any> = new EventEmitter();

    
    private _intersectionObserver? : IntersectionObserver;
    constructor (
        private _element: ElementRef
    ) {}

    public ngAfterViewInit () {
        const options = {
            root: null,
            threshold: 0.99
          }
        this._intersectionObserver = new IntersectionObserver(entries => {
            this.checkForIntersection(entries);
        }, options);
        this._intersectionObserver.observe(<Element>(this._element.nativeElement));
    }
    
    private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
            if (this.checkIfIntersecting(entry)) {
                this.deferLoad.emit();
                if (this._intersectionObserver != undefined){
                    this._intersectionObserver.unobserve(<Element>(this._element.nativeElement));
                    this._intersectionObserver.disconnect();
                }
            }
        });
    }

    private checkIfIntersecting (entry: IntersectionObserverEntry) {
        // console.log(entry.intersectionRatio);
        // console.log("entry.isIntersecting", entry.isIntersecting);
        // console.log("this._element.nativeElement", this._element.nativeElement);
        // console.log("entry.target", entry.target);
        // console.log("----------------------------------");
        return (<any>entry).isIntersecting ;
    }
}