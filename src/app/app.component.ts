import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HdWalletMultiButtonComponent} from '@heavy-duty/wallet-adapter-material'

@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent ], 
  selector: 'solana-bootcamp1sem-root',
  template: `
  <header>
  <h1> Hola Soy Dieg, ponga la wallet </h1>

  <hd-wallet-multi-button></hd-wallet-multi-button>
  </header>
  `,
  
})
export class AppComponent {
}