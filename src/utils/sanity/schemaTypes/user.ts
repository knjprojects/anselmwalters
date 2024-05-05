import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'user',
  title: 'user',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Role',
      type: 'reference',
      to: {type: 'role'},
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
