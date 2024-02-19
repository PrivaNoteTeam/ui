import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    variant: {
      options: ['default', 'secondary', 'destructive', 'ghost', 'outline', 'link'],
      control: { type: 'select' }
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon']
    }
  },
  render: ({text, ...args}) => <Button {...args}>{ text || 'Button' }</Button>
}
