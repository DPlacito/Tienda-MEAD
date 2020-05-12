import { Injectable } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TitleService {
    name: string

    constructor(
        private router: Router,
        private title: Title,
        private meta: Meta
    ) { this.DataRoute() }

    DataRoute() {
        this.getDataRoute().subscribe(data => {
            this.name = data.title;
            this.title.setTitle(this.name)

            const metaTag: MetaDefinition = {
                name: 'descripcion',
                content: this.name
            }
            this.meta.updateTag(metaTag);
        })
    }

    getDataRoute() {
        return this.router.events.pipe(
            filter(event => event instanceof ActivationEnd),
            filter((event: ActivationEnd) => event.snapshot.firstChild === null),
            map((event: ActivationEnd) => event.snapshot.data)
        )
    }
}