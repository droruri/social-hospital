import { Pipe, PipeTransform } from '@angular/core';
import {Community} from '../../core/models/community';
@Pipe({
  name: 'filterCommunities'
})
export class FilterCommunitiesPipe implements PipeTransform {
  transform(items: Community[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( item => {
      return item.name.toLowerCase().includes(searchText);
    });
  }
}
