import {
  DoughsService,
  SizesService,
  SaucesService,
  IngredientsService,
  MiscService,
} from "@/services";

const Resources = {
  DOUGH: "dough",
  SIZES: "sizes",
  SAUCES: "sauces",
  INGREDIENTS: "ingredients",
  MISC: "misc",
};

export const createResources = () => ({
  [Resources.DOUGH]: new DoughsService(Resources.DOUGH),
  [Resources.SIZES]: new SizesService(Resources.SIZES),
  [Resources.SAUCES]: new SaucesService(Resources.SAUCES),
  [Resources.INGREDIENTS]: new IngredientsService(Resources.INGREDIENTS),
  [Resources.MISC]: new MiscService(Resources.MISC),
});
