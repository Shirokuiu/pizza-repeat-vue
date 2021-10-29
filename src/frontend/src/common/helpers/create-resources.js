import { DoughService } from "@/services";
import { SizeService } from "@/services/Size.service";

const Resources = {
  DOUGH: "dough",
  SIZES: "sizes",
};

export const createResources = () => ({
  [Resources.DOUGH]: new DoughService(Resources.DOUGH),
  [Resources.SIZES]: new SizeService(Resources.SIZES),
});
