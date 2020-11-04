import { observable, Observable , Observer, of, interval, timer} from "rxjs";

export class rxTest{

    obs$ : Observer<any> = {
        next : value => console.log('next: ',value),
        error : err => console.log(err),
        complete: () => console.log('terminado')

    }

    /*public intervalo$ = new Observable<number>( subs =>{
        let a = 0
        setInterval( () =>{ 
            a ++
            subs.next(a)

        }, 1000)
    })*/

//obb$ = of([1,2,3], 2, 'hola', function(){}, false)

interval$ = interval(1000)
}