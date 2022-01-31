import { trigger,state,style,transition,animate} from '@angular/animations';
export const changingAnimations =
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