import { TestBed, async } from '@angular/core/testing';
import { AddressData } from './address.model';

describe('AddressData', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });


    it('description test', async(() => {
        let data = TestBed.get(AddressData);
        data.buildingName = 'Building';
        expect(data.description).toEqual('Building');
    }));
});
