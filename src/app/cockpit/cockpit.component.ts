import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('sCreated') serverCreated = new EventEmitter<{serverName : string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName : string, serverContent: string}>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  // newServerName = '';
  // newServerContent = '';

  constructor() { }

  ngOnInit() {
  }
é
  onAddServer(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

}
