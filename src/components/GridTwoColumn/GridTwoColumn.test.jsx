import { renderTheme } from '../../styles/render-theme';
import { GridTwoColum } from '.';
import { screen } from '@testing-library/react';

import mock from './mock';

describe('<GridTwoColum />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColum {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
