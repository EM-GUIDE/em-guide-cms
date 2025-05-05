import type { Schema, Attribute } from '@strapi/strapi';

export interface InteractiveSlide extends Schema.Component {
  collectionName: 'components_interactive_slides';
  info: {
    displayName: 'Slide';
    icon: 'layout';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    text: Attribute.String;
    url: Attribute.String;
    textMobileOverwrite: Attribute.String;
  };
}

export interface InteractiveSlider extends Schema.Component {
  collectionName: 'components_interactive_sliders';
  info: {
    displayName: 'Slider';
    icon: 'stack';
    description: '';
  };
  attributes: {
    slides: Attribute.Component<'interactive.slide', true>;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface StaticButton extends Schema.Component {
  collectionName: 'components_static_buttons';
  info: {
    displayName: 'button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    newPage: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface StaticContentPreviewGrid extends Schema.Component {
  collectionName: 'components_static_content_preview_grids';
  info: {
    displayName: 'Content Preview Grid';
    icon: 'grid';
    description: '';
  };
  attributes: {
    contentPreviewItem: Attribute.Component<
      'static.content-preview-item',
      true
    >;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface StaticContentPreviewItem extends Schema.Component {
  collectionName: 'components_static_content_preview_items';
  info: {
    displayName: 'Content Preview Item';
    icon: 'book';
  };
  attributes: {
    tag: Attribute.String;
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface StaticFeaturedContent extends Schema.Component {
  collectionName: 'components_static_featured_contents';
  info: {
    displayName: 'Featured Content';
    icon: 'star';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    button: Attribute.Component<'static.button'>;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface StaticFooterLinks extends Schema.Component {
  collectionName: 'components_static_footer_links';
  info: {
    displayName: 'Footer Links';
    icon: 'exit';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    newPage: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface StaticImagesWithDecoration extends Schema.Component {
  collectionName: 'components_static_images_with_decorations';
  info: {
    displayName: 'Images With Decoration';
    icon: 'picture';
    description: '';
  };
  attributes: {
    images: Attribute.Media;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface StaticSeo extends Schema.Component {
  collectionName: 'components_static_seos';
  info: {
    displayName: 'Seo';
    icon: 'globe';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    canonical: Attribute.String;
    ogTitle: Attribute.String & Attribute.Required;
    ogDescription: Attribute.Text;
    ogImage: Attribute.Media & Attribute.Required;
    twitterTitle: Attribute.String;
    twitterDescription: Attribute.Text;
    twitterImage: Attribute.Media;
  };
}

export interface StaticTextWithSideImage extends Schema.Component {
  collectionName: 'components_static_text_with_side_images';
  info: {
    displayName: 'Text With Side Image';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface StaticWysiwyg extends Schema.Component {
  collectionName: 'components_static_wysiwygs';
  info: {
    displayName: 'Wysiwyg';
    icon: 'file';
    description: '';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'interactive.slide': InteractiveSlide;
      'interactive.slider': InteractiveSlider;
      'static.button': StaticButton;
      'static.content-preview-grid': StaticContentPreviewGrid;
      'static.content-preview-item': StaticContentPreviewItem;
      'static.featured-content': StaticFeaturedContent;
      'static.footer-links': StaticFooterLinks;
      'static.images-with-decoration': StaticImagesWithDecoration;
      'static.seo': StaticSeo;
      'static.text-with-side-image': StaticTextWithSideImage;
      'static.wysiwyg': StaticWysiwyg;
    }
  }
}
