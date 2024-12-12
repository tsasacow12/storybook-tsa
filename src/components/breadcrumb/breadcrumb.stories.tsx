import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Breadcumb from './breadcrumb';

export default {
  title: 'components/breadcumb',
  components: Breadcumb,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    variant: {
      description: 'union',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    datas: {
      description: 'The data for the breadcrumb',
      control: {
        type: 'object',
      },
      table: {
        type: {
          summary: 'Array<{ label: string; url?: string }>',
          detail: `{
  label: string;
  url?: string;
}[]`,
        },
        defaultValue: {
          summary: `[
  { label: 'Home', url: '/' },
  { label: 'Library', url: '/library' },
  { label: 'Data', url: '/data' },
]`,
        },
      },
    },
  },
} as Meta;

const Template: StoryFn<{
  variant: 'small' | 'medium' | 'large';
  datas: Array<{ label: string; url?: string }>;
}> = (args) => <Breadcumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'medium',
  datas: [
    { label: 'Home', url: '/' },
    { label: 'Library', url: '/library' },
    { label: 'Data', url: '/data' },
  ],
};

export const Custom = Template.bind({});
Custom.args = {
  variant: 'large',
  datas: [
    { label: 'Home' },
    { label: 'Library' },
    { label: 'Data' },
  ],
};