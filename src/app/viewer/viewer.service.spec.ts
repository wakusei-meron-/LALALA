/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ViewerService } from './viewer.service';

describe('Service: Viewer', () => {
  beforeEach(() => {
    addProviders([ViewerService]);
  });

  it('should ...',
    inject([ViewerService],
      (service: ViewerService) => {
        expect(service).toBeTruthy();
      }));
});
