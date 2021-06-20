import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'o texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Ligth = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Ligth.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'o texto está claro',
  colorDark: false,
};
