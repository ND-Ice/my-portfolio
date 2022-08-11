import PropTypes from "prop-types";
import { Button, Flex } from "@chakra-ui/react";

export default function StackFilter({ value, items, onFilter }) {
  return (
    <Flex gap={2} my={5} justify="center">
      {items &&
        items.map((item) => (
          <FilterItem
            key={item.id || item.title}
            isActive={value === item.title}
            onClick={() => onFilter(item.title)}
          >
            {item.title}
          </FilterItem>
        ))}
    </Flex>
  );
}

function FilterItem({ isActive, onClick, children }) {
  return (
    <Button
      onClick={onClick}
      bg={isActive ? "light" : ""}
      color={isActive ? "dark" : "light"}
      _hover={{ color: isActive ? "dark" : "accent.base" }}
    >
      {children}
    </Button>
  );
}

StackFilter.propTypes = {
  value: PropTypes.string,
  items: PropTypes.array,
  onFilter: PropTypes.func,
};
