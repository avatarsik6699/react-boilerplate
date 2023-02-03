import { createRoute } from "atomic-router";
import React from "react";

const Page: React.FC = () => {
  return <div>posts</div>;
};

export const Posts = {
  route: createRoute(),
  page: Page,
};
