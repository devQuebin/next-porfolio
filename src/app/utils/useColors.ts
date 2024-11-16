type TextType =
  | "grey-default"
  | "grey-subtitle"
  | "default"
  | "small"
  | "subtitle"
  | "title";

const colorLight = { color: "black" };

const colorDark = { color: "white" };

export const useLight = (type: TextType, definedColor?: string) => {
  switch (type) {
    case "grey-default":
      return { color: "gray.600" };
    case "grey-subtitle":
      return { color: "gray.800" };
    case "default":
      return { color: definedColor ?? colorLight.color };
    case "small":
      return { color: definedColor ?? colorLight.color };
    case "subtitle":
      return { color: definedColor ?? colorLight.color };
    case "title":
      return { color: definedColor ?? colorLight.color };
    default:
      return { color: colorLight.color }; // Agregar un caso por defecto opcional
  }
};

export const useDark = (type: TextType, definedColor?: string) => {
  switch (type) {
    case "grey-default":
      return { color: "gray.400" };
    case "grey-subtitle":
      return { color: "gray.400" };
    case "default":
      return { color: definedColor ?? colorDark.color };
    case "small":
      return { color: definedColor ?? colorLight.color };
    case "subtitle":
      return { color: definedColor ?? colorDark.color };
    case "title":
      return { color: definedColor ?? colorDark.color };
    default:
      return { color: colorDark.color }; // Agregar un caso por defecto opcional
  }
};
