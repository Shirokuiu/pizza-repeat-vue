import { DoughService } from "@/services";

const Resources = {
  DOUGH: "dough",
};

export const createResources = () => ({
  [Resources.DOUGH]: new DoughService(Resources.DOUGH),
});
