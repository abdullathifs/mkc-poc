import { Image, Link, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import ALink from 'components/feature/custom-link';
export default function FooterDynamic(props: any) {
  const data = props.props;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <ALink href="/" className="logo-footer" content={undefined} style={undefined}>
                <Image field={data.fields.FooterLogo} width="154" height="43" />
              </ALink>
            </div>
            <div className="col-lg-9">
              <div className="widget widget-newsletter form-wrapper form-wrapper-inline">
                <div className="newsletter-info mx-auto mr-lg-2 ml-lg-4">
                  <h4 className="widget-title">
                    {' '}
                    <Text field={data.fields.SubscribeHeading} />
                  </h4>
                  <p>
                    <Text field={data.fields.SubscribeTitle} />
                  </p>
                </div>
                <form action="#" className="input-wrapper input-wrapper-inline">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email address here..."
                    required
                  />
                  <button className="btn btn-primary btn-rounded btn-md ml-2" type="submit">
                    <Link field={data.fields.SubscribeCTA} />
                    <i className="d-icon-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-info">
                <h4 className="widget-title">Contact Info</h4>
                <ul className="widget-body">
                  <li>
                    <label>Phone: </label>
                    <ALink href="tel:#" className={undefined} content={undefined} style={undefined}>
                      Toll Free (123) 456-7890
                    </ALink>
                  </li>
                  <li>
                    <label>Email: </label>
                    <ALink
                      href="mailto:mail@riode.com"
                      className={undefined}
                      content={undefined}
                      style={undefined}
                    >
                      mail@riode.com
                    </ALink>
                  </li>
                  <li>
                    <label>Address: </label>
                    <ALink href="#" className={undefined} content={undefined} style={undefined}>
                      123 Street Name, City, England
                    </ALink>
                  </li>
                  <li>
                    <label>WORKING DAYS / HOURS: </label>
                  </li>
                  <li>
                    <ALink href="#" className={undefined} content={undefined} style={undefined}>
                      Mon - Sun / 9:00 AM - 8:00 PM
                    </ALink>
                  </li>
                </ul>
              </div>
            </div>
            {data?.fields?.FooterNavigation?.map((datanav: any, index: any) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="widget ml-lg-4">
                  <h4 className="widget-title">{datanav.fields.NavigationName.value}</h4>
                  <ul className="widget-body"></ul>
                </div>
              </div>
            ))}
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-instagram">
                <h4 className="widget-title">
                  <Text field={data.fields.Title} />
                </h4>
                <figure className="widget-body row">
                  {data?.fields?.FooterInstagram?.map((datainsta: any, index: any) => (
                    <div className="col-3" key={index}>
                      <Image field={datainsta.fields.Image} width="64" height="64" />
                    </div>
                  ))}
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-left">
            {data?.fields?.FooterCardIcon?.map((datapay: any, index: any) => (
              <figure className="payment" key={index}>
                <Image field={datapay.fields.Icon} />
              </figure>
            ))}
          </div>
          <div className="footer-center">
            <RichText field={data.fields.FooterCopyrightText} />
          </div>
          <div className="footer-right">
            {data?.fields?.FooterSocialLinks?.map((datasocial: any, index: any) => (
              <div className="social-links" key={index}>
                <ALink
                  href={datasocial.fields.Link.value.href}
                  className={datasocial.fields.IconClass.value}
                  content={undefined}
                  style={undefined}
                >
                  <span></span>
                </ALink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
