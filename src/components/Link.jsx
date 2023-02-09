import { Box } from "@mantine/core";

const Link = ({ children }) => {
  return (
    <a>
      <Box sx={{ color: "blue.4" }}>{children}</Box>
    </a>
  );
};

export default Link;
