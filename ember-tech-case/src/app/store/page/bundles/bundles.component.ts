import {Component, OnInit} from '@angular/core';
import {Bundle} from "../../models/bundle/bundles.entity";
import {BundlesService} from "../../service/bundles.service";

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrl: './bundles.component.css'
})
export class BundlesComponent implements OnInit {

  bundles: Bundle[];

  constructor(private bundleService: BundlesService) {
    this.bundles = [];
  }

  ngOnInit(): void {
    this.bundleService.getAll().subscribe((response: any) => {
      this.bundles = response;
    });
  }

}
