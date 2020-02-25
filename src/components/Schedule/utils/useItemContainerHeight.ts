import useWindowWidth from "hooks/useWindowWidth";
import theme from "theme";

export const ITEM_CONTAINER_HEIGHT = 130;
export const ITEM_CONTAINER_HEIGHT_MOBILE = 170;

export const useItemContainerHeight = () => {
  const windowWidth = useWindowWidth();

  return windowWidth < theme.deviceBreakpoints.tablet
    ? ITEM_CONTAINER_HEIGHT_MOBILE
    : ITEM_CONTAINER_HEIGHT;
};
