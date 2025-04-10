import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-video',
  standalone: false,
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent implements AfterViewInit{
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  @ViewChild('video') video!: ElementRef
  @ViewChild('image') image!: ElementRef
  @ViewChild('play') play!: ElementRef
  @ViewChild('barre') barre!: ElementRef
  @ViewChild('angular') angular!: ElementRef
  @ViewChild('spring') spring!: ElementRef
  @ViewChild('tech') techBtn!: ElementRef
  ngAfterViewInit(): void {
    
    if (isPlatformBrowser(this.platformId)) {
      gsap.to(this.video.nativeElement, {
        width: "100%",
        height: "100%",
        borderRadius: "0%",
        opacity:1,
        duration: 2,
        scrollTrigger:{
          trigger: '.presatation',
          scrub:1 ,
          start: "top 0%",
          end: "bottom center",
        }
      });

      gsap.to(this.play.nativeElement, {
        opacity:0,
        duration: 2,
        scale:4,
        rotate:'360deg',
        scrollTrigger:{
          trigger: '.section2',
          scrub:1 ,
          start: "top 0%",
          end: "bottom center",
        }
      });
      
      gsap.to(this.image.nativeElement, {
        clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 0 100%, 0% 0%)", // rectangle complet
      scrollTrigger: {
        trigger: this.image.nativeElement,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      }
      })
      
      gsap.to(this.barre.nativeElement, {
        opacity:1,
        duration: 2,
        top:"90%",
        scrollTrigger:{
          trigger: '.section2',
          start: "top 100%",
          end: "bottom center",
          scrub:1,
        }
      });

      gsap.to(this.angular.nativeElement, {
        opacity:0,
        duration: 3,
        x:"200%",
        scale:1.5,
        scrollTrigger:{
          trigger: '.angular',
          start: "top 20%",
          end: "bottom center",
          scrub:1,
        }
      });
      gsap.to(this.spring.nativeElement, {
        opacity:0,
        duration: 3,
        x:"200%",
        scale:1.5,
        scrollTrigger:{
          trigger: '.spring',
          start: "top 100%",
          end: "bottom center",
          scrub:1,
        }
      });
      gsap.to(this.techBtn.nativeElement, {
        duration: .5,
        backgroundColor:"#1A1A40",
        scrollTrigger:{
          trigger: '.angular',
          start: "top 100%",
          end: "bottom center",
          scrub:1,
        }
      });
    }
  }


}
