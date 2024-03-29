import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIcon} from '@angular/material/icon'
import { MatInput} from '@angular/material/input'
import { EventEmitter } from "stream";

export interface TransferFormModel {
    memo: string | null;
    amount: string | null;
    receiverAddress: string | null;
    token: {
        address: string;
        balance: number;
        info: {name: string; symbol: string; image: string};
    } | null
    }

export interface TrasferFormPayload{
        memo: string;
        amount: string;
        receiverAddress: string;
        mintAddress: string; 
    }

    @Component ({
        selector: 'bob-transfer-form',
        template:  `
        <form #form="ngForm" class="W-[400px]" (ngSubmit)="onSuBmintForm(form)">
            <mat-form-field appearance="fill" class="w-full mb-4">
            <mat-label>token</mat-label>
            <mat-select
                name="token"
                required
                #tokenControl="ngModel"
                [(ngModel)]="model.token">

            

            @for (token of tokens(); track token ) {
            <mat-option [value]="token.address">
            <div class= "flex item-center gap-2">
                <img [src]="token.info.image" class="rounded-full w-8 h-8"/>
                <span>{{token.info.symbol}}</span>
                <div>
            </mat-option>
             }
            </mat-select>    

             @if (form1.submitted && tokenControl.errors){
                <mat-error>
             }

                </div>
            @for (memoControl.errors['required']){
                El motivo es obligatorio.
            }
        </mat-error>
        } @else {
        <mat-hint>Debe ser el motivo de la transferencia.</mat-hint>

        }

  </mat-form-field>

</form>
`,
        standalone: true,
        imports: [FormsModule, MatInternalFormFieldModule, MatInput, MatIcon, MatBotton],                   
})

export class TransferModalComponent {
    readonly model: TransferFormModel ={
        memo: null,
        amount: null,
        receiverAddress: null,

};

    @Output() readonly submitForm = new EventEmitter < TransferFormPayload>();

    onSuBmintForm(form: NgForm) {
        if(
            form.invalid || 
            this.model.amount === null || 
            this.model.memo === null || 
            this.model.receiverAddress === null
        ){ 
        console.error('El formulario es inválido.');
        } else {
        this.submitForm.emit({
            mintAddress: this.model.
            amount: this.model.amount * 10**9,
            memo: this.model.memo,
            receiverAddress: this.model.receiverAddress,
        });
    }
}
}