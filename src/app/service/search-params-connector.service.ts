import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class SearchParamsConnectorService {
  constructor(private route: ActivatedRoute, private router: Router) {}

  syncParamsToState(search_keyword: string, filter: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        search_keyword: search_keyword == '' ? null : search_keyword,
        filter: filter == 'ALL' ? null : filter,
      },
      queryParamsHandling: 'merge',
    });
  }

  updateStateFromParams(form: FormGroup) {
    this.route.queryParams.subscribe((params) => {
      const search_keyword = params['search_keyword'] || '';
      const filter = params['filter'] || 'ALL';
      form.patchValue({ search_keyword, filter }, { emitEvent: false });
    });
  }
}
