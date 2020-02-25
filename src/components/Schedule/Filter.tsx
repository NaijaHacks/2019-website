import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { TextInput } from "@hackthenorth/north";

import copy from "copy";

export interface FilterProps {
  filterItems: (searchTerm: string) => void;
}

const FilterInput = styled(TextInput)`
  border-radius: 8px;
  border-width: 3px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.globalConstants.color.greyL};
  }

  ${props => props.theme.mediaQueries.tabletMobile`
    box-sizing: border-box;
    width: 100%;
  `}
`;

const Filter: React.FC<FilterProps> = ({ filterItems }) => {
  const [value, setValue] = useState("");

  /**
   * Set the internal value to maintain controlled input as well as trigger
   * the callback to filter the items externally.
   */
  const onFilterValueChange = useCallback(
    (event: React.ChangeEvent<Element>) => {
      const inputVal = (event.target as HTMLInputElement).value;
      setValue(inputVal);
      filterItems(inputVal);
    },
    [filterItems]
  );

  return (
    <FilterInput
      placeholder={copy.scheduleSection.filter.placeholder}
      value={value}
      onChange={onFilterValueChange}
    />
  );
};

export default Filter;
