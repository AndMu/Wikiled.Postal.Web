
export class AddressData {
    postTown: string;
    postcode: string;
    dependentLocality: string;
    doubleDependentLocality: string;
    thoroughfare: string;
    dependentThoroughfare: string;
    buildingNumber: number;
    buildingName: string;
    subBuildingName: string;
    poBox: string;
    departmentName: string;
    organisationName: string;
    udprn: number;
    postcodeType: string;
    suOrganisationIdentifier: string;
    deliveryPointSuffix: string;

    get description(): string {
        let description = this.addString(this.thoroughfare, this.buildingNumber.toString());
        description = this.addString(description, this.buildingName);
        description = this.addString(description, this.subBuildingName);
        return description;
    }

    private addString(one: string, two: string): string{

        if (one == null ||
            one.length === 0) {
            return two;
        }

        return `${one} ${two}`;
    }
  }
