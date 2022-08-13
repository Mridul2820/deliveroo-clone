export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Restaurant Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      title: "Image of Restaurant",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "latitude",
      title: "Latitude of Restaurant",
      type: "number",
    },
    {
      name: "longitude",
      title: "Longitude of Restaurant",
      type: "number",
    },
    {
      name: "address",
      title: "Address of Restaurant",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "Rating of Restaurant",
      type: "number",
      description: "Rating must be between 1 and 5",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Rating must be between 1 and 5"),
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
