export class Truck {

  id: number;
  ownerFirstName: string;
  ownerLastName: string;
  brandName: string;
  email: string;
  address: string;
  websiteUrl: string;
  menuUrl: string;

  constructor() {
    this.id = 0;
    this.ownerFirstName = '';
    this.ownerLastName = '';
    this.brandName = '';
    this.email = '';
    this.address = '';
    this.websiteUrl = '';
    this.menuUrl = '';
  }
}
