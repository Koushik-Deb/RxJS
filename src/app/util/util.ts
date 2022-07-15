import { Observable } from "rxjs";


export const createHTTPObservable = (url: string) =>{
    return new Observable(observer=>{
      fetch(url)
      .then(response=>{
        return response.json()
      })
      .then(body=> {
        observer.next(body);

        observer.complete();
      })
      .catch(ex=>{
        observer.error(ex);
      })
  
    });
}