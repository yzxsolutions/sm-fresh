// Static category data for the food category grid
export const mockRootProps = {
  categories: [
    {
      id: "meat-poultry",
      title: "Meat & Poultry",
      description: "Fresh cuts of meat and poultry",
      backgroundColor: "#eeeeee",
      descriptionColor: "#444444",
      titleColor: "rgba(76, 76, 76, 0.65)",
      image: "/images/category/meat-poultry.png"
    },
    {
      id: "vegetables",
      title: "VEGETABLES",
      description: "Fresh & Seasonal",
      backgroundColor: "rgba(39, 218, 84, 0.20)",
      descriptionColor: "#0a73a1",
      titleColor: "rgba(76, 76, 76, 0.65)",
      image: "/images/category/vegetables.png"
    },
    {
      id: "bakery",
      title: "Bakery",
      description: "baked bread, pastries",
      backgroundColor: "#e3f2e6",
      descriptionColor: "#25d02c",
      titleColor: "rgba(76, 76, 76, 0.65)",
      image: "/images/category/bakery.png"
    },
    {
      id: "fruits",
      title: "FRUITS",
      description: "Feature a variety of seasonal",
      backgroundColor: "#fef9c4",
      descriptionColor: "#d4b100",
      titleColor: "rgba(76, 76, 76, 0.65)",
      image: "/images/category/fruits.png"
    },
    {
      id: "seafood",
      title: "Seafood",
      description: "Fresh fish and shellfish",
      backgroundColor: "#fae8e8",
      descriptionColor: "#c63d42",
      titleColor: "rgba(76, 76, 76, 0.65)",
      image: "/images/category/seafood.png"
    },
    {
      id: "pantry-staples",
      title: "Pantry Staples",
      description: "Fresh fish and shellfish",
      backgroundColor: "#fae8e8",
      descriptionColor: "#c63d42",
      titleColor: "rgba(76, 76, 76, 0.65)",
      image: "/images/category/pantry-staples.png"
    },
    {
      id: "dairy-eggs",
      title: "Dairy & Eggs",
      description: "High Quality Dairies",
      backgroundColor: "#f2e7e3",
      descriptionColor: "#b18531",
      titleColor: "rgba(76, 76, 76, 0.65)",
      image: "/images/category/dairy-eggs.png"
    },
    {
      id: "beverages",
      title: "Beverages",
      description: "High Quality Dairies",
      backgroundColor: "#f2e7e3",
      descriptionColor: "#b18531",
      titleColor: "rgba(76, 76, 76, 0.65)",
      image: "/images/category/beverages.png"
    },
    {
      id: "spices",
      title: "Spices",
      description: "baked bread, pastries",
      backgroundColor: "#e3f2e6",
      descriptionColor: "#25d02c",
      titleColor: "rgba(76, 76, 76, 0.65)",
      image: "/images/category/spices.png"
    }
  ]
};

// Props types for the category grid component
export interface CategoryGridProps {
  categories: CategoryItem[];
}

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  descriptionColor: string;
  titleColor: string;
  image: string;
}