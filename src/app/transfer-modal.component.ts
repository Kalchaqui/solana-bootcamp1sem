import { Component, OnInit, TemplateRef } from "@angular/core";

    @Component ({
        selector: 'bob-transfer-modal',
        template:  `
            <div class="px8 py-16">
                <h2> Tramsferir Fondos 

                </h2>
                <bob-transfer-form></bob-transfer-form>
            </div>
                    `, 
        standalone: true,
        imports: [TransferFormComponent]
                })

export class TransferModalComponent {};