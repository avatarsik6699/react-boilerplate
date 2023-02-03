import { createRoute } from "atomic-router";
import React from "react";

const Page: React.FC = () => {
  return <div>Страница не найдена</div>;
};

export const NotFound = {
  page: Page,
  route: createRoute(),
};
