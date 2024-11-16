"use client";
import JobsCard from "@/components/jobsCard";
import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

function page() {
  return (
    <Flex mt={8}>
      <Heading>Experiencia Laboral</Heading>
      <JobsCard />
    </Flex>
  );
}

export default page;
