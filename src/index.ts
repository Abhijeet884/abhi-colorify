  export class Log {
     static success(msg:String){
            console.log('%c ${msg}', 'color: green' );
     }

     static danger(msg:String){
        console.log('%c ${msg}', 'color: red' );
     }

     static warn(msg:String){
        console.log('%c ${msg}', 'color: black ; background: yellow' );
     }
  }