import { Label } from "./Label";

export class Question {
    id: number;
    title: Label;
    type: string;
    isRequired: boolean;
    responses: any[];
    identifier: string;
    defaultValue: string;
    unit: Label;
    minLength: string;
    maxLength: string;
    mask: string;
}