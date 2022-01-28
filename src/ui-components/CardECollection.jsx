/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Home } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardE from "./CardE";
import { Collection } from "@aws-amplify/ui-react";
import { SortDirection } from "@aws-amplify/datastore";
export default function CardECollection(props) {
  const { home, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const itemsPagination = { sort: (s) => s.price(SortDirection.ASCENDING) };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Home,
          pagination: itemsPagination,
        }).items;
  return (
    <Collection
      type="grid"
      templateRows="1fr 1fr"
      autoFlow="column"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <CardE
          home={item}
          height="auto"
          width="auto"
          margin="5px 0 0 5px"
          key={item.id}
          {...getOverrideProps(overrides, "Collection.CardE[0]")}
        ></CardE>
      )}
    </Collection>
  );
}
