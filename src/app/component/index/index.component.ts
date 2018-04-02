import { Component, OnInit } from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {MaterializeAction} from 'angular2-materialize';
declare var $:any
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router:Router) { }
  username:String;
  
  carouselActions = new EventEmitter<string|MaterializeAction>();
  prev(){
    this.carouselActions.emit({action:"carousel",params:['prev']});
  }
  next(){
    this.carouselActions.emit({action:"carousel",params:['next']});
  }
  
  ngOnInit() {
    this.username=localStorage.getItem("email");
    this.functiontop();
  }
  logout(){
    localStorage.removeItem("email");
    this.router.navigate(["/"]);
  }
  functiontop(){
    $(window).on('mousewheel', function(){
      $( 'html,body' ).stop();
  });
  
  $(window).scroll(function (e) {
      if ($(this).scrollTop() > 100) {
          $('.upscroll').fadeIn();
      } else {
          $('.upscroll').fadeOut();
      }
  });
  
   $('#upscroll').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 2000);
      return false;
  });
  //
    window.onscroll=function(){
      myFunction();
      top();
    }
    var header=document.getElementById("nav");
    var sticky =header.offsetTop;
    function top(){
      if(document.body.scrollTop>150||document.documentElement.scrollTop>150){
        document.getElementById("upscroll").style.display="block";
      }else if(document.body.scrollTop<150||document.documentElement.scrollTop<150){
        document.getElementById("upscroll").style.display="none";
      }
    }
    function myFunction(){
      if(window.pageYOffset>=sticky){
        header.classList.add("sticky");
      }
      else{
        header.classList.remove("sticky");
      }
    }
  }
  scrollnav(){
    window.onscroll=function(){
      myFunction();
    }
    var header=document.getElementById("nav");
    var sticky =header.offsetTop;
    function myFunction(){
      if(window.pageYOffset>=sticky){
        header.classList.add("sticky");
      }
      else{
        header.classList.remove("sticky");
      }
    }
  }
} 
