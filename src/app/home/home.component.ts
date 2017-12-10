import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { DragScroll } from 'ngx-drag-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  viewProviders: [MatIconRegistry]
})
export class HomeComponent implements OnInit {
  ngOnInit() {
  }

  title = 'app works!';
  hideScrollbar;
  disabled;
  xDisabled;
  yDisabled;
  imagelist = [
    'topsell1.png',
    'topsell2.png',
    'topsell3.png',
    'topsell4.png',
    'topsell5.png',
    'topsell6.png',
  ];
  leftNavDisabled = false;
  rightNavDisabled = false;

  dragScrollDom: any;
  dragScrollRef: ElementRef;
  dragScroll: DragScroll;

  @ViewChild('nav', {read: DragScroll}) ds: DragScroll;

  constructor(
    matIconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    matIconRegistry
        .addSvgIcon('github',
            sanitizer.bypassSecurityTrustResourceUrl('/assets/img/github.svg'))
        .registerFontClassAlias('fontawesome', 'fa');
  }

  clickItem(item) {
    console.log('itmen clicked');
  }

  remove() {
    this.imagelist.pop();
  }

  toggleHideSB() {
    this.hideScrollbar = !this.hideScrollbar;
  }

  toggleDisable() {
    this.disabled = !this.disabled;
  }
  toggleXDisable() {
    this.xDisabled = !this.xDisabled;
  }
  toggleYDisable() {
    this.yDisabled = !this.yDisabled;
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  rightBoundStat(reachesRightBound: boolean) {
    this.rightNavDisabled = reachesRightBound;
  }
 
  

}
