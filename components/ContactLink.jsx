import { Icon, Flex } from "@chakra-ui/react";

export default function ContactLink({ icon, title }) {
  return (
    <Flex>
      {icon && <Icon as={icon} />}
      {title}
    </Flex>
  );
}
