import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ViewEncapsulation,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{

  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  @Input() name: string;

  constructor() {
    console.log('constructor called!')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!')
    console.log('changes', changes)
  }

  ngOnInit() {
    console.log('ngOnInit called!')
    console.log('text content ' + this.header.nativeElement.textContent)
    console.log('text paragraph ' + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!')
    console.log('text paragraph ' + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked called!')
  }

  ngAfterViewInit() {
    console.log('AfterViewInit called!')
    console.log('text content ' + this.header.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked called!')
  }
  ngOnDestroy() {
    console.log('OnDestroy called!')
  }
}
