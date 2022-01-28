/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Note } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type NOTESNIPPETCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    note?: Note;
    items?: any[];
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function NOTESNIPPETCollection(props: NOTESNIPPETCollectionProps): React.ReactElement;
