import { Dummy } from '.';

export default {
  title: 'Dummy',
  component: Dummy,
  args: {
    children: 'Dummy',
  },
  argTypes: {
    children: { types: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Dummy {...args} />
    </div>
  );
};
