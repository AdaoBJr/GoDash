import { useMemo } from 'react';
import { HeaderModuleProps, LinksProps } from '@dash/module-components';

import { headerLinks } from 'articles';
import { useAppContext } from 'context';
import logo from 'assets/images/logoGoDash.png';
import { ContainerHeader, LinkContainer, LinkItem } from 'lib/shared/Header/styles';

export interface useHeaderProps extends HeaderModuleProps {}

export const useHeader = (props: useHeaderProps = {}) => {
  const { windowSize } = useAppContext();

  const { links } = useMemo((): LinksProps => ({ ...headerLinks }), []);

  const { headerProps } = useMemo(
    () => ({
      headerProps: {
        windowSize,
        src: logo,
        sx: ContainerHeader,
        linksProps: {
          links,
          sx: { container: LinkContainer, item: LinkItem },
          ...props.linksProps
        },
        ...props
      } as HeaderModuleProps
    }),
    [props]
  );
  return { headerProps };
};
