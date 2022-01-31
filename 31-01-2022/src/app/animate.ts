import { state, style, transition, trigger, animate } from "@angular/animations";

trigger
(
    'openClose',
    [

        state
        (
            'open',
            style
            (
                {
                    height:'20px',
                    opacity:1,
                    backgroundColor:'midnightblue'
                }   
            )
        ),

        state 
        (
            'closed',
            style
            (
                {
                    height:'10px',
                    opacity:0.7,
                    backgroundColor:'crimson'

                }
            )
        )

        transition
        (
            'closed'=>'open',
            [
                animate('0.5s')
            ]
        ),

        transition
        (
            'open'=>'closed',
            [
                animate('1s')
            ]
        )
    ]
)
