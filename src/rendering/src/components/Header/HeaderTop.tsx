import { Text, Field, LinkField, Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import ALink from 'components/feature/custom-link';

type HeaderTopProps = ComponentProps & {
  fields: {
    WelcomeMessage: Field<string>;
    CurrencySelector: [
      children: {
        fields: { LinkData: LinkField };
      }
    ];
    LanguageSelector: [children: { fields: { LinkData: LinkField } }];
    Contact: LinkField;
    NeedHelp: LinkField;
    DisplaySignInLink: any;
    signInLink: LinkField;
    DisplayRegisterLink: any;
    RegisterLink: LinkField;
  };
};

const HeaderTop = (props: HeaderTopProps): JSX.Element => {
  return (
    <header className="header header-border">
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <p className="welcome-msg">
              <Text field={props.fields.WelcomeMessage} />
            </p>
          </div>
          <div className="header-right">
            <div className="dropdown">
              {props?.fields?.CurrencySelector?.map((data, index) => (
                //
                <>
                  {index == 0 ? (
                    <ALink href="#" className={undefined} content={undefined} style={undefined}>
                      {data.fields.LinkData.value.text}
                    </ALink>
                  ) : (
                    <></>
                  )}
                </>
              ))}

              <ul className="dropdown-box">
                {props?.fields?.CurrencySelector?.map((data) => (
                  //
                  <>
                    <li>
                      <ALink href="#" className={undefined} content={undefined} style={undefined}>
                        {data.fields.LinkData.value.text}
                      </ALink>
                    </li>
                  </>
                ))}
              </ul>
            </div>

            <div className="dropdown">
              {props?.fields?.LanguageSelector?.map((data, index) => (
                //
                <>
                  {index == 0 ? (
                    <ALink href="#" className={undefined} content={undefined} style={undefined}>
                      {data.fields.LinkData.value.text}
                    </ALink>
                  ) : (
                    <></>
                  )}
                </>
              ))}

              <ul className="dropdown-box">
                {props?.fields?.LanguageSelector?.map((data) => (
                  //
                  <>
                    <li>
                      <ALink href="#" className={undefined} content={undefined} style={undefined}>
                        {data.fields.LinkData.value.text}
                      </ALink>
                    </li>
                  </>
                ))}
              </ul>
            </div>

            <span className="divider"></span>
            <i className="d-icon-map"></i>
            <Link field={props.fields.Contact} />
            <i className="d-icon-info"></i>
            <Link field={props.fields.NeedHelp} />

            {props.fields.DisplaySignInLink.value == 1 ? (
              <>
                <i className="d-icon-user"></i>
                <Link field={props.fields.signInLink} />
              </>
            ) : (
              <></>
            )}

            {props.fields.DisplayRegisterLink.value == 1 ? (
              <>
                <span>/</span>
                <Link field={props.fields.RegisterLink} />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export const Default = HeaderTop;

// export default withDatasourceCheck()<HeaderTopProps>(HeaderTop);
