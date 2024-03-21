import { Component, Input, OnInit, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../service/cv.service';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/routes.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  cv!: Cv | null;
  @Input() id = 0;
  // On inject le CvService pour le récupérer
  cvService = inject(CvService);
  router = inject(Router);
  toastr = inject(ToastrService);
  constructor() {}
  ngOnInit(): void {
    this.cv = this.cvService.getCvById(this.id);
    if (!this.cv) {
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
  deleteCv() {
    if (this.cv) {
      if (this.cvService.deleteCv(this.cv)) {
        this.router.navigate([APP_ROUTES.cv]);
        this.toastr.success(`Le cv a été supprimé avec succès`);
      }
    }
  }
}
