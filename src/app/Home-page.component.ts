import { Component } from '@angular/core';
import { HeroSectionComponent} from './hero-section.component';
import {featuresSectionComponent } from './feature-section.component';
import { settingsSectionComponent } from './Setting-section.component';


@Component({
    selector: 'Wallet-home-page',
    template: `
        <Wallet-hero-section></Wallet-hero-section> 
        <wallet-features-section></wallet-features-section>
    `,
    
    
    imports: [HeroSectionComponent, featuresSectionComponent, settingsSectionComponent],
    standalone: true,
})
export class HomePageComponent {}