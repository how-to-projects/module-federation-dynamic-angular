import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  constructor(
    protected viewContainerRef: ViewContainerRef,
    // @Inject(Injector) private injector: Injector,
    // @Inject(ComponentFactoryResolver) private cfr
    ) { }

  search() {
    alert('Not implemented for this demo!');
  }

  async terms() {
    const comp = await import('../lazy/lazy.component').then(m => m.LazyComponent);

    this.viewContainerRef.createComponent(comp);

    /**
     * Comment these out, along with @Inject in the constructor
     * because ComponentFactoryResolver is deprecated in Angular 14
     */
    // const factory = this.cfr.resolveComponentFactory(comp);
    // this.viewContainer.createComponent(factory, undefined, this.injector);
  }


}
