import { OasInfo } from "oai-ts-core";
import { OasTotvsXTotvs} from "./xtotvs.model"

export abstract class OasTotvsInfo extends OasInfo {
    "x-totvs"? : OasTotvsXTotvs;
}