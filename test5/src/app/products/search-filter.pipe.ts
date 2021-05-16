import { ReturnStatement } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import {Category} from "../products/category"
@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(categorylist: any[], searchText: string,index:number): any[] {
    if(!categorylist) return [];
    
   if(!searchText) return categorylist;
searchText = searchText.toLowerCase();
return categorylist.filter( it => {
    
const categoriesName =  it.name.toLowerCase().includes(searchText) ;
 const id   = it.id.toString().includes(searchText);
//const index=   it.name.indexOf(categoriesName);
  return (categoriesName +id); 

});


 }
   

//transform(categorylist: string, searchText: string): any {
  ///  if (searchText && categorylist) {


     //   let startIndex = categorylist.toLowerCase().indexOf(searchText.toLowerCase());
       // if (startIndex != -1) {
         //   let endLength = searchText.length;
           // let matchingString = categorylist.substr(startIndex, endLength);
           // return categorylist.replace(matchingString, "<mark>" + matchingString + "</mark>");
        //}

    //}
   // return categorylist;
//}


}

