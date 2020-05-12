import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
    providedIn: 'root'
})
export class AlertsService {
    success(message: string) {
        Swal.fire({
            icon: 'success',
            text: message,
            timer: 2000
        })
    }

    warning(message: string) {
        Swal.fire({
            icon: 'warning',
            text: message,
            timer: 2000
        })
    }


    error(message: string) {
        Swal.fire({
            icon: 'error',
            text: message,
            timer: 2000
        })
    }
}