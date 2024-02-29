import { Component, computed, inject } from "@angular/core";
import {TransferFormComponent, TransferFormPayload } from './transfer-form.component';
import {injectTransactionSender, walletStore} from '@heavy-duty/wallet-adapter'; 
import {createTransferInstructions} from '@heavy-duty/spl-utils'; 
import { MatDialogRef } from "@angular/material/dialog";
import {MatProgressSpinner} from "@angular/material/progress-spinner"
import {TokenList} from "./shyft-appi.service"
import { computedAsync } from "ngxtension/computed-async";
import { toSignal } from "@angular/core/rxjs-interop";


    @Component ({
        selector: 'bob-transfer-modal',
        template:  `
            <div class="px8 py-16">
                <h2 class="text-3xl text-center mb-8"> Tramsferir Fondos </h2>
                
                <bob-transfer-form [tokens] =  "alltokens() ?? []" (sendTransfer)= "onSendTransfer($event)" (cancelTransfer)= "onCancelTransfer()">
                </bob-transfer-form>

                @if (isRunning()) {
                    <div class="absolute w-full h-full top-0 left-0 flex">
                    <mat-progress-spinner
                        color= "primary"
                        mode= "indeterminate"
                        diameter= "64"
                    ></mat-progress-spinner>
                    <p class="capitalize text-xl">{{transactionStatus()}}...</p>

                    </div>
                 }
            </div>`,
             
                     
        standalone: true,
        imports: [TransferFormComponent, MatProgressSpinner, TransferModalComponent ],
                })

export class TransferModalComponent {
    private readonly _matDialogRef = injectTransactionSender();
    private readonly _transactionSender = inject(MatDialogRef);
    private readonly _walletStore = inject(walletStore);
    private readonly _publicKey = toSignal(this._walletStore.publicKey$);
    private readonly _tokendList = inject(TokenList);
     
    readonly transactionStatus = computed(() =>this. _transactionSender () .status );
    readonly isRunning = computed (
        () => 
                this.transactionStatus() === 'sending' ||
                this.transactionStatus() === 'confirming' ||
                this.transactionStatus() === 'finalizing',

    
            )}
    onSendTransfer (payload: TransferFormPayload) {
        this._matDialogRef.disableClose = true;

        this._transactionSender
        .send(({ publicKey })=>
        createTransferInstructions({
            senderAddress: publicKey. toBase58(),
            receiverAddress: payload.receiverAddress,
            mintAddress: Payload.mintAddress,
            amount: Payload.amount,
            fundReceiver: true,
            memo: Payload.memo,
        }))

        console.log('Hola Mundo' payload);
        createTransferInstructions({
            amount: payload.amount,
            mintAddress: '7EYnhQoR9YM3N7UoaKRoA44Uy8JeaZV3qyouov87awMs',
            receiverAddress: payload.receiverAddress,
            senderAddress: publicKey. toBase58(),
            fundReceiver: true,
            memo: payload.memo,
        })

        .subscribe({
            next: (signature) => console.log(`Firma: ${signature}`),
            error: (error) => console.error(error),
            complete: () => console.log('Transacción Lista'),
        
        })    

    }      
            
    onCancelTransfer() {

    }  
    
