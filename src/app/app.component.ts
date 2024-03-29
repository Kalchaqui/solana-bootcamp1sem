import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import {HdWalletMultiButtonComponent} from '@heavy-duty/wallet-adapter-material'
import { ShyftApiService } from './shyft-appi.service';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import {toSignal} from '@angular/core/rxjs-interop';
import {computedAsync} from 'ngxtension/computed-async';
import { DecimalPipe } from '@angular/common';
import { MatAnchor } from '@angular/material/button';
import { TransferModalComponent } from './transfer-modal.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    DecimalPipe,
    MatAnchor, 
    HdWalletMultiButtonComponent, 
  ], 
  selector: 'solana-bootcamp1sem-root',
  template: `
  <header class="px-16 pt-20 pb-8 relative">
  <h1 class="text-center text-5xl mb-4"> Hola Soy Bob, ingresr su wallet y sientase cómodo </h1>

  @if (account()) {
    <div class="absolute top-4 left-4 flex items-center gap-2">
    <img [src]="account()?.info?.image" class="w-8 h-8" />
    <p class="text-2xl font-bold">
      {{account()?.balance | number}}
  </p>
    </div>
  }
  
  <div class="flex justify-center">
  <hd-wallet-multi-button></hd-wallet-multi-button>
   </div>
  </header>
  `,
  
})
export class AppComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _publicKey = injectPublicKey();
  private readonly _matDialog = inject(MatDialog);

  readonly balance = computedAsync(() => 
  this._shyftApiService.getAccount(this._publicKey()?.toBase58()), 
  {requireSync: false},
  );

    onTransfer(){ 

      this._matDialog.open(TransferModalComponent);
    }

}

