import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { FarmToCupComponent } from './components/farm-to-cup/farm-to-cup.component';
import { InstagramFeedComponent } from './components/instagram-feed/instagram-feed.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    FeaturedProductsComponent,
    WhyChooseUsComponent,
    FarmToCupComponent,
    InstagramFeedComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
