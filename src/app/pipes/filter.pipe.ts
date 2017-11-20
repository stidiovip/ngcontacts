import { Pipe, PipeTransform } from '@angular/core';

import _ from 'lodash'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(contacts: any, terms: any): any {
    
    if ( _.isUndefined(terms) || _.isEmpty(terms) ){
      return contacts;
    }

    let _terms = _.toLower(terms)
    return _.filter( contacts , ( contact ) => {
      return _.includes( _.toLower(contact.firstname), _terms) || _.includes( _.toLower(contact.lastname), _terms)
    })

  }
}
