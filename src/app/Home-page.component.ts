import { Component } from '@angular/core';
import { HeroSectionComponent} from './hero-section.component';
import {featuresSectionComponent } from './feature-section.component';
import { settingsPageComponent } from './Setting-section.component';


@Component({
    selector: 'bob-home-page',
    template: `
        <bob-hero-section></bob-hero-section> 
        <bob-features-section></bob-features-section>
    `,
    
    
    imports: [HeroSectionComponent, featuresSectionComponent, settingsPageComponent],
    standalone: true,
})
export class HomePageComponent {}