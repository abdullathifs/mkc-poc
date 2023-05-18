import React from 'react';
import { Text, Field, ImageField, LinkField, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import ALink from 'components/feature/custom-link';
import OwlCarousel from 'components/feature/owl-carousel';
import { mainSlider6 } from 'src/utils/data/carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// type CategoryGroup1Props = ComponentProps & {
//   fields: {
//     componentTitle: Field<string>;
//     categories: [
//       children: {
//         fields: {
//           listingType: Field<string>;
//           iconClassName: Field<string>;
//           image: ImageField;
//           backgroudColour: Field<string>;
//           title: Field<string>;
//           categoryItems: [
//             children: {
//               fields: {
//                 itemName: Field<string>;
//                 itemUrl: LinkField;
//               };
//             }
//           ];
//         };
//       }
//     ];
//   };
// };

type CategoryGroup1Props = ComponentProps & {
  fields: {
    items: any;
    listingType: Field<string>;
    iconClassName: Field<string>;
    image: ImageField;
    backgroudColour: Field<string>;
    title: Field<string>;
    categoryItems: [
      children: {
        fields: {
          itemName: Field<string>;
          itemUrl: LinkField;
        };
      }
    ];
  };
};

const CategoryGroup1Listing = (props: CategoryGroup1Props): JSX.Element => {
  return (
    <>
      <div className="page-content">
        <div className="container">
          <section className="mt-10 pt-4 border-container">
            {/* <h2 className="title title-center">
              <Text field={props.fields.componentTitle} />
            </h2> */}
            {/* <Heading props={props} /> */}
            <OwlCarousel adClass="owl-theme" options={mainSlider6}>
              {props.fields?.items?.map(
                (
                  item: {
                    fields: {
                      image: { value: { src: string; alt: string } };
                      title: TextField;
                      categoryItems: any[];
                    };
                  },
                  index: React.Key
                ) => (
                  <div className="category category-group-image" key={index}>
                    <ALink href="#" className={undefined} content={undefined} style={undefined}>
                      <figure className="category-media">
                        <LazyLoadImage
                          src={'/-' + item.fields?.image?.value?.src.split('/-').pop()}
                          alt={item.fields.image.value?.alt}
                          width="190"
                          height="169"
                          effect="opacity"
                        />
                      </figure>
                    </ALink>

                    <div className="category-content">
                      <h4 className="category-name">
                        <ALink href="#" className={undefined} content={undefined} style={undefined}>
                          <Text field={item.fields.title} />
                        </ALink>
                      </h4>
                      <ul className="category-list">
                        {item.fields.categoryItems.map((categoryItem, categoryItemIndex) => (
                          <li key={categoryItemIndex}>
                            <ALink
                              href={categoryItem.fields.itemUrl.value.href}
                              className={undefined}
                              content={undefined}
                              style={undefined}
                            >
                              <Text field={categoryItem.fields.itemName} />
                            </ALink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              )}
            </OwlCarousel>
          </section>
        </div>
      </div>
      <br></br>
    </>
  );
};

export const Default = CategoryGroup1Listing;