"use client";

import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

interface JobsProps {
  title: string;
  company: string;
  from: string;
  to: string;
  detail1: string;
  detail2?: string;
  detail3?: string;
}

const JobsCard = ({
  title,
  company,
  from,
  to,
  detail1,
  detail2,
  detail3,
}: JobsProps) => {
  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Stack direction={"column"} align={"center"} justify={"center"}>
            <Text fontSize={"6xl"} fontWeight={600}>
              {title}
            </Text>
            <Text fontSize={"2xl"} fontWeight={600}>
              {company}
            </Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue("gray.100", "gray.900")} px={6} py={10}>
          <List spacing={3}>
            <ListItem>From: {from}</ListItem>
            <ListItem>To: {to}</ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              {detail1}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              {detail2}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              {detail3}
            </ListItem>
          </List>
        </Box>
      </Box>
    </Center>
  );
};

export default JobsCard;
