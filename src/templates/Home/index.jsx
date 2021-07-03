import * as Styled from './styles';
import { Heading } from '../../components/Heading/index';
import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import { useEffect } from 'react';
import { mapData } from '../../api/map-data';
import { useState } from 'react';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { GridTwoColum } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { useLocation } from 'react-router-dom';
import config from '../../config';

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathName ? pathName : config.defaultSlug;
    const load = async () => {
      try {
        const data = await fetch(config.url + slug);
        const json = await data.json();
        const pageData = mapData(json);

        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };
    load();
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carreganado...  | ${config.siteName}`;
    }

    if (data && data.slug) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColum {...section} key={key} />;
        }
        if (component === 'section.sction-content') {
          return <GridContent {...section} key={key} />;
        }
        if (component === 'section.section-grid-text') {
          return <GridText {...section} key={key} />;
        }
        if (component === 'section.section-grid-image') {
          return <GridImage {...section} key={key} />;
        }
      })}
    </Base>
  );
}

export default Home;
