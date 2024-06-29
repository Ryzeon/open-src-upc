import {AfterViewInit, Component, Input} from '@angular/core';
import {Bundle} from "../../models/bundle/bundles.entity";
import {BundlesService} from "../../service/bundles.service";

@Component({
  selector: 'app-bundles-card',
  templateUrl: './bundles-card.component.html',
  styleUrl: './bundles-card.component.css'
})
export class BundlesCardComponent implements AfterViewInit {

  @Input() bundle: Bundle;

  youSave: number;

  constructor(private bundleService: BundlesService) {
    this.bundle = {} as Bundle;
    this.youSave = 0;
  }

  ngAfterViewInit(): void {
    this.bundleService.getAllProductsFromBundle(this.bundle.id).subscribe((products: any[]) => {
      this.youSave = products.reduce((a, b) => a + b.price, 0) - this.bundle.price;
    })
  }
}
