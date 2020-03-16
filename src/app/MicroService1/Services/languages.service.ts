import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Languages } from '../Models/Languages.models';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  formData: Languages;
  constructor(private _http:HttpClient) { }

  GetLang () {
    return this._http.get('http://localhost:54735/api/Languages'); 
}
DeleteLang(id:string)
{
  return this._http.delete('http://localhost:54735/api/Languages/'+id) ;  
}

PostLang ()
{
  return this._http.post('http://localhost:54735/api/Languages',this.formData) ; 
}


}
