import {defineField, defineType} from 'sanity'

export const coment = defineType({
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        defineField(
      {
        name: 'postedBy',
        title: 'PostedBy',
        type: 'postedBy',
      }),
      defineField(
      {
        name: 'comment',
        title: 'Comment',
        type: 'string',
      }),
    ],
})