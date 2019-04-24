/**
 * @license
 * Copyright 2017 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation} from "@angular/core";
import {Oas20Document, OasDocument} from "oai-ts-core";
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

@Component({
    moduleId: module.id,
    selector: "xtotvs-section",
    templateUrl: "xtotvs-section.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class XTotvsSectionComponent extends AbstractBaseComponent {

    @Input() document: Oas30TotvsDocument;

    constructor(private changeDetectorRef: ChangeDetectorRef, private documentService: DocumentService,
                private commandService: CommandService, private selectionService: SelectionService) {
        super(changeDetectorRef, documentService, selectionService);
    }
}
