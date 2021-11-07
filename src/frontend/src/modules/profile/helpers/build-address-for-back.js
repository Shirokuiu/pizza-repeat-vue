export const buildAddressForBack = (form) => ({
  name: form.name.value,
  street: form.street.value,
  building: form.building.value,
  flat: form.flat.value,
  comment: form.comment.value,
});
