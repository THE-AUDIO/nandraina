import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'THE Audio Nandraina';
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) {}
  @ViewChild('video') video!: ElementRef;
  @ViewChild('chifre') chifre!: ElementRef;
  @ViewChild('play') play!: ElementRef;
  @ViewChild('projet1') projet1!: ElementRef;
  @ViewChild('projet2') projet2!: ElementRef;
  @ViewChild('projet3') projet3!: ElementRef;
  @ViewChild('projet4') projet4!: ElementRef;
  // @ViewChild('contactTitle') contactTitle!: ElementRef;
  // @ViewChild('tech') techBtn!: ElementRef;
  @ViewChild('angular') angular!: ElementRef;
  @ViewChild('spring') spring!: ElementRef;

  @ViewChild('site2') site2!: ElementRef;
  @ViewChild('titre2') titre2!: ElementRef;

  @ViewChild('site3') site3!: ElementRef;
  @ViewChild('titre3') titre3!: ElementRef;

  @ViewChild('site4') site4!: ElementRef;
  @ViewChild('titre4') titre4!: ElementRef;


  @ViewChild('repository') repository!: ElementRef;
  @ViewChild('contribution') contribution!: ElementRef;
  @ViewChild('lSequence') lSequence!: ElementRef;
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ViewChild('content') content!: ElementRef;



  flipFlap(card:ElementRef, container:any){
    gsap.to(card.nativeElement, {
      rotateX:0,
      duration:2,
    scrollTrigger: {
      id:"pro",
      trigger: card.nativeElement,
      start: 'left 70%',
      end: 'left 50%',
      scrub: 1,
      horizontal:true,
      containerAnimation:container
    }
    });
  }
 Counter(counter: ElementRef, targetNumber:number){
  let obj = { val: 0 }; // objet intermédiaire pour animer le nombre
  gsap.fromTo(obj, 
    { val: 0 }, 
    {
      val: targetNumber,
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: counter.nativeElement,
        start: 'top 80%',
        end: 'top 60%',
        scrub: false,
        once: true,
      },
      onUpdate: () => {
        // met à jour le texte du compteur
        counter.nativeElement.innerText = Math.floor(obj.val);
      }
    });
 }

goTo(classe:any){
  let smoother = ScrollSmoother.create({
    smooth:2
  })
  smoother.scrollTo(classe, true, "center center")
}
 
 textCross(upElt: ElementRef, downElt:ElementRef, container:any){
  gsap.from(upElt.nativeElement, {
    opacity:0,
    x:200,
    duration:2,
  scrollTrigger: {
    trigger: upElt.nativeElement,
    start: 'let 70%',
    end: 'left 50%',
    horizontal:true,
    scrub: 1,
    containerAnimation:container,
  }
  });
  gsap.from(downElt.nativeElement, {
    opacity:0,
    x:-200,
    duration:2,
  scrollTrigger: {
    trigger: downElt.nativeElement,
    start: 'left 70%',
    end: 'left 50%',
    horizontal:true,
    containerAnimation:container,
    scrub: 1,
  }
  });
 }
  ngAfterViewInit(): void {
    
    if (isPlatformBrowser(this.platformId)) {
      // scroll horizontale element
      var container = document.querySelector('.tech-container')
      let sections = document.querySelectorAll('.tech-section')
      const width = 100 * sections.length + 'vw';
      this.renderer.setStyle(container, "width", width)
      
      
      gsap.to(this.video.nativeElement, {
        height: "100%",
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
   
      
 const horizontalTween  =  gsap.to(sections, {
        xPercent: -100*(sections.length - 1),
        ease:"none",
        scrollTrigger:{
          trigger: container,
          pin:true,
          scrub:1,
          end:"+=3500",

        }
      });

      gsap.to(this.chifre.nativeElement, {
        clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 0 100%, 0% 0%)", // rectangle complet
        duration:2,
      scrollTrigger: {
        trigger: '.section_hidden',
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      }
      });

      // gsap.to(this.contactTitle.nativeElement, {
      //   y:"-50px",
      //   duration:2,
      // scrollTrigger: {
      //   trigger: this.contactTitle.nativeElement,
      //   start: 'top center',
      //   end: 'top 40%',
      //   scrub: 1,
      // }
      // });
      gsap.to(this.projet1.nativeElement, {
        rotateX:0,
        duration:2,
      scrollTrigger: {
        trigger: this.projet1.nativeElement,
        start: 'top center',
        end: 'top 20%',
        scrub: 1,
      }
      });
      gsap.from(this.angular.nativeElement, {
        opacity:0,
        x:200,
        duration:2,
      scrollTrigger: {
        trigger: this.angular.nativeElement,
        start: 'top 80%',
        end: 'top 60%',
        scrub: 1,
      }
      });
      gsap.from(this.spring.nativeElement, {
        opacity:0,
        x:-200,
        duration:2,
      scrollTrigger: {
        trigger: this.angular.nativeElement,
        start: 'top 80%',
        end: 'top 60%',
        scrub: 1,
      }
      });
      gsap.utils.toArray<HTMLElement>('.photo').forEach((img) => {
        gsap.to(img,{
            rotateY:0,
            filter: 'grayscale(0%)',
            scrollTrigger: {
              trigger: img,
              start: 'top 60%',
              end:'top 50%',
              toggleActions: 'play none none reverse',
            },
            duration: 1,
            ease: 'power2.out'
          });
      });
      
      this.flipFlap(this.projet2,horizontalTween)
      this.flipFlap(this.projet3,horizontalTween)
      this.flipFlap(this.projet4,horizontalTween)
      this.textCross(this.site2, this.titre2, horizontalTween)
      this.textCross(this.site3, this.titre3, horizontalTween)
      this.textCross(this.site4, this.titre4, horizontalTween)
      this.Counter(this.repository, 54)
      this.Counter(this.contribution, 1099)
      this.Counter(this.lSequence, 24)

    }

  }
}
