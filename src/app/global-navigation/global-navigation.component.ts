import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'global-nav',
  templateUrl: './global-navigation.component.html',
  styleUrls: ['./global-navigation.component.scss']
})
export class GlobalNavigationComponent implements OnInit {
    constructor(private modalService: NgbModal) {}

    ngOnInit() {
    }

    openLoginModal() {
        const modalRef = this.modalService.open(LoginComponent);
    }

    openRegisterModal() {
        const modalRef = this.modalService.open(RegisterComponent);
    }
}
