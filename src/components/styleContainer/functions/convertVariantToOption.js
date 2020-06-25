const convertVariantToOption = (variant) => {
  switch (variant) {
    case "100":
      return "thin"

    case "100italic":
      return "thin italic"

    case "200":
      return "extra-light"

    case "200italic":
      return "extra-light italic"

    case "300":
      return "light"

    case "300italic":
      return "light italic"

    case "regular":
      return variant

    case "italic":
      return variant

    case "500":
      return "medium"

    case "500italic":
      return "medium italic"

    case "600":
      return "semi-bold"

    case "600italic":
      return "semi-bold italic"

    case "700":
      return "bold"

    case "700italic":
      return "bold italic"

    case "800":
      return "extra-bold"

    case "800italic":
      return "extra-bold italic"

    case "900":
      return "black"

    case "900italic":
      return "black italic"

    default:
      return variant
  }
}

export default convertVariantToOption
