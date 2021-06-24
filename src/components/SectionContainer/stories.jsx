import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan
          disputationi eu sit. Vide electram sadipscing et per. Per aumento de
          cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im
          ampola pa arma uma pindureta.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
