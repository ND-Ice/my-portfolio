import { Link } from "@chakra-ui/react";

export default function LinkWrapper({ href, children }) {
  return (
    <Link href={href} target="_blank" lineHeight={0}>
      {children}
    </Link>
  );
}
