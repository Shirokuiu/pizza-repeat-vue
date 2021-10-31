import {
  DoughsService,
  SizesService,
  SaucesService,
  IngredientsService,
} from "@/services";

const Resources = {
  DOUGH: "dough",
  SIZES: "sizes",
  SAUCES: "sauces",
  INGREDIENTS: "ingredients",
};

export const createResources = () => ({
  [Resources.DOUGH]: new DoughsService(Resources.DOUGH),
  [Resources.SIZES]: new SizesService(Resources.SIZES),
  [Resources.SAUCES]: new SaucesService(Resources.SAUCES),
  [Resources.INGREDIENTS]: new IngredientsService(Resources.INGREDIENTS),
});
