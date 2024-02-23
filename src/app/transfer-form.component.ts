import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIcon} from '@angular/material/icon'
import { MatInput} from '@angular/material/input'

export interface TransferFormModel {
    memo: string | null;
    amount: string | null;
    receiverAddress: string | null;
    }

export interface TrasferFormPayload{
        memo: string;
        amount: string;
        receiverAddress: string;
    }

    @Component ({
        selector: 'bob-transfer-form',
        template:  `
        <form #form="ngForm">
            <mat-form-field appearance="fill">
            <mat-label>Concepto</mat-label>
            <input 
                memo="memo"
                matInput 
                type="text"
                placeholder="Ejemplo pagar el recibo."
                [(ngModel)]="model.memo"
                required
                #memoControl="ngModel"
            />  
            <mat-icon matSuffix>description</mat-icon>

            @if (form.submitted && memoControl.errors ) {
            <mat-error>
            @if (memoControl.errors['required']){
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

}