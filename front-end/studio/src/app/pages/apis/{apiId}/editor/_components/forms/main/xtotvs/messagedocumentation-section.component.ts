// /**
//  * @license
//  * Copyright 2017 JBoss Inc
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  *      http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  */

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation} from "@angular/core";
import {Oas20Document} from "oai-ts-core";
import {
    createChangeDescriptionCommand,
    createChangePropertyCommand,
    createChangeVersionCommand,
    ICommand
} from "oai-ts-commands";
import {CommandService} from "../../../../_services/command.service";
import {AbstractBaseComponent} from "../../../common/base-component";
import {DocumentService} from "../../../../_services/document.service";
import {SelectionService} from "../../../../_services/selection.service";
import { Oas30TotvsDocument } from "../../../../../../../../app-totvs-core/models/OasTotvs30Document.model";
import { OasTotvsMessageDocumentation } from "../../../../../../../../app-totvs-core/models/message.documentation.model";
import { OasTotvsXTotvs } from "../../../../../../../../app-totvs-core/models/xtotvs.model";

@Component({
    moduleId: module.id,
    selector: "message-documentation-section",
    templateUrl: "messagedocumentation-section.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageDocumentationComponent extends AbstractBaseComponent {

    @Input() document: Oas30TotvsDocument;

    constructor(private changeDetectorRef: ChangeDetectorRef, private documentService: DocumentService,
                private commandService: CommandService, private selectionService: SelectionService) {
        super(changeDetectorRef, documentService, selectionService);
        
    }

    ngOnInit() {
       //Coringa
    //    this.document.info["x-totvs"] = {
    //     messageDocumentation : {
    //         name : "Isso",
    //         description : "Ai",
    //         segment : "M",
    //         domain : "F"
    //     }
    //  };
     //
    }

    public xtotvs(): OasTotvsMessageDocumentation {
        //Ta retornando x-totvs como undefined :'(   --> Provavel que não tenha parseado essa parte.        
        var xtotvs : OasTotvsXTotvs = 
        {
            messageDocumentation : {
                name : "Branch",
                description : "Filial",
                segment : "FrameWork",
                domain : "integration"
            }
         };
        
         return xtotvs.messageDocumentation;

        // return this.document.info["x-totvs"].messageDocumentation;
    }

    /**
     * returns the name.
     */
    public name(): string {
        if (this.xtotvs()) {
            return this.xtotvs().name;
        } else {
            return null;
        }
    }

    /**
     * returns the description.
     */
    public description(): string {
        if (this.xtotvs()) {
            return this.xtotvs().description;
        } else {
            return null;
        }
    }

    /**
     * returns the segment.
     */
    public segment(): string {
        if (this.xtotvs()) {
            return this.xtotvs().segment;
        } else {
            return null;
        }
    }

    /**
     * returns the domain.
     */
    public domain(): string {
        if (this.xtotvs()) {
            return this.xtotvs().domain;
        } else {
            return null;
        }
    }

    /**
     * Called when the user changes message documentation name.
     * @param newName
     */
    public onNameChange(newName: string): void {
        console.info("[MessageDocumentationComponent] User changed the message documentation name to: ", newName);
        let command: ICommand = createChangeVersionCommand(this.document, newName);
        this.commandService.emit(command);
    }


    /**
     * Called when the user changes the version.
     * @param newVersion
     */
    public onVersionChange(newVersion: string): void {
        console.info("[MessageDocumentationComponent] User changed the version to: ", newVersion);
        let command: ICommand = createChangeVersionCommand(this.document, newVersion);
        this.commandService.emit(command);
    }

    /**
     * Called when the user changes the description.
     * @param newDescription
     */
    public onDescriptionChange(newDescription: string): void {
        console.info("[MessageDocumentationComponent] User changed the description.");
        let command: ICommand = createChangeDescriptionCommand(this.document, newDescription);
        this.commandService.emit(command);
    }

        /**
     * Called when the user changes the description.
     * @param newDescription
     */
    public onxtotvsChange(newDescription: string): void {
        console.info("[MessageDocumentationComponent] User changed the description.");
        let command: ICommand = createChangeDescriptionCommand(this.document, newDescription);
        this.commandService.emit(command);
    }    

    /**
     * Called when the user changes the "consumes".
     * @param newValue
     */
    public onConsumesChange(newValue: string[]): void {
        console.info("[MessageDocumentationComponent] User changed the consumes to: ", newValue);
        let command: ICommand = createChangePropertyCommand<string[]>(this.document, this.document, "consumes", newValue);
        this.commandService.emit(command);
    }

    /**
     * Called when the user changes the "produces".
     * @param newValue
     */
    public onProducesChange(newValue: string[]): void {
        console.info("[MessageDocumentationComponent] User changed the produces to: ", newValue);
        let command: ICommand = createChangePropertyCommand<string[]>(this.document, this.document, "produces", newValue);
        this.commandService.emit(command);
    }
}
