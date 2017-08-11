import { Component } from 'react';
import { RaphaelService } from './raphael.service';

export class RaphaelBase {

    paper: any;

    private element: Component;

    public constructor(element: Component,
                       private raphaelService: RaphaelService) {
        this.element = element;
        this.paper = this.raphaelService.getInstance(element);
    }
}