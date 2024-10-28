import { Text, TextProps } from "@chakra-ui/react";

import { useDark, useLight } from "@/app/utils/useColors";

const fontStyle = {
  subtitle: { fontSize: 23, fontWeight: "bold" },
  title: { fontSize: 40, fontWeight: "bold" },
  "grey-default": { fontSize: 19 },
  "grey-subtitle": { fontSize: 23, fontWeight: "bold" },
  default: { fontSize: 19 },
  small: { fontSize: 17 },
};

function ThemedText({
  children,
  type = "default",
  ...otherProps
}: {
  type?: text_type;
  children: (string | JSX.Element | number)[] | string | JSX.Element;
} & TextProps) {
  return (
    <Text
      _dark={useDark(type, otherProps.color)}
      _light={useLight(type, otherProps.color)}
      style={fontStyle[type]}
      {...otherProps}
    >
      {children}
    </Text>
  );
}

export default ThemedText;
