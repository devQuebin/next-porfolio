"use client";
import JobsCard from "@/components/JobsCard";
import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import jobsJson from "../../utils/jobsJson.json";
import { useTranslations } from "next-intl";

function page() {
  const t = useTranslations("work");
  return (
    <Flex mt="9vh" direction={"column"} align="center" justify={"center"}>
      <Heading mt={8} mb={8}>
        {t("work_title")}
      </Heading>
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

export default page;
