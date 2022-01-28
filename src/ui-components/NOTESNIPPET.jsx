/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Heading, Text, View } from "@aws-amplify/ui-react";
export default function NOTESNIPPET(props) {
  const { note, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="937px"
      height="529px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Heading
        position="absolute"
        display="flex"
        left="90px"
        top="73px"
        level="1"
        children={note?.title}
        {...getOverrideProps(overrides, "View.Heading[0]")}
      ></Heading>
      <Badge
        position="absolute"
        display="flex"
        left="811px"
        top="461px"
        fontFamily="Inter"
        fontWeight="700"
        fontSize="16px"
        color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
        textAlign="left"
        lineHeight="20px"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.49px"
        size="default"
        variation="default"
        children={note?.tag2}
        {...getOverrideProps(overrides, "View.Badge[0]")}
      ></Badge>
      <Badge
        position="absolute"
        display="flex"
        left="700px"
        top="461px"
        fontFamily="Inter"
        fontWeight="700"
        fontSize="16px"
        color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
        textAlign="left"
        lineHeight="20px"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.49px"
        size="default"
        variation="default"
        children={note?.tag1}
        {...getOverrideProps(overrides, "View.Badge[1]")}
      ></Badge>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        left="792px"
        top="41px"
        padding="0px 0px 0px 0px"
        children={note?.date}
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.05000000000000002px"
        width="548px"
        height="232px"
        position="absolute"
        left="63px"
        top="265px"
        padding="0px 0px 0px 0px"
        children={note?.summary}
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
    </View>
  );
}
