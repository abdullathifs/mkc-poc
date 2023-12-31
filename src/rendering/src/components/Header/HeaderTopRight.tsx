import {
  Field,
  withDatasourceCheck,
  Link,
  LinkField,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import Styles from './HeaderNavigation.module.css';

type HeaderTopRightProps = ComponentProps & {
  fields: {
    CallUs: Field<string>;
    WishList: LinkField;
    Shop: LinkField;
  };
};

const HeaderTopRight = (props: HeaderTopRightProps): JSX.Element => (
  <div className={Styles.headerTopRight}>
    <h5>
      <RichText field={props.fields.CallUs} />
    </h5>
    <Link field={props.fields.WishList} />
    <Link field={props.fields.Shop} />
  </div>
);

export default withDatasourceCheck()<HeaderTopRightProps>(HeaderTopRight);
