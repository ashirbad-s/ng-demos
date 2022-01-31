import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, useAnimation, transition } from '@angular/animations';
import {changingAnimations} from './animations';
  
@Component
({
  selector: 'app-animation-page',
  templateUrl:'./animation-page.html',
  animations:[
  /*  trigger('openClose', [
        transition('open => closed', [
          useAnimation(changingAnimations, {
            params: {
              height: 0,
              opacity: 1,
              backgroundColor: 'red',
              time: '1s'
            }
          })
        ])
      ])*/

      trigger
      (
          'openClose', [      
              state 
              (
                  'open',
                  style
                  (
                      {
                          height:'50px',
                          opacity:1,
                          backgroundColor:'turquoise'
                      }   
                  )
              ),
      
              state 
              (
                  'closed',
                  style
                  (
                      {
                          height:'0px',
                          opacity:1,
                          backgroundColor:'crimson'
                      }
                  )
              ),
      
              transition
              (
                  'closed => open',
                  [
                      animate('0.75s')
                  ]
              ),
      
              transition
              (
                  'open=> closed',
                  [
                      animate('1s')
                  ]
              )
          ]
      )
  ]
})
  export class AnimationPageComponent 
  {
    title = '31-01-2022';
    isOpen = true;
  
    toggle() {
      this.isOpen = !this.isOpen;
    }
    
  }
  