/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Note } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import NOTESNIPPET from "./NOTESNIPPET";
import { Collection } from "@aws-amplify/ui-react";
export default function NOTESNIPPETCollection(props) {
  const { note, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Note,
        }).items;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <NOTESNIPPET
          note={item}
          key={item.id}
          {...getOverrideProps(overrides, "Collection.NOTESNIPPET[0]")}
        ></NOTESNIPPET>
      )}
    </Collection>
  );
}
