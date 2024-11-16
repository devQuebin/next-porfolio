"use client";
import JobsCard from "@/components/JobsCard";
import {
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import jobsJson from "../../utils/jobsJson.json";
import { useTranslations } from "next-intl";

function Experience() {
  const t = useTranslations("work");
  return (
    <Flex mt="9vh" direction={"column"} align="center" justify={"center"}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading mt={8} mb={4}>
          {t("work_title")}
        </Heading>
        <Text color={"gray.600"} fontSize={"xl"} mb={8}>
          {t("work_subtitle")}
        </Text>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {jobsJson.map((job) => (
          <JobsCard
            key={job.title}
            title={job.title}
            company={job.company}
            from={job.from}
            to={job.to}
            detail1={job.detail1}
            detail2={job.detail2}
            detail3={job.detail3}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default Experience;
