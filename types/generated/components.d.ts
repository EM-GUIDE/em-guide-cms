import type { Schema, Attribute } from '@strapi/strapi';

export interface InteractiveCarousel extends Schema.Component {
  collectionName: 'components_interactive_carousels';
  info: {
    displayName: 'carousel';
    icon: 'stack';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    url: Attribute.String;
    text: Attribute.String;
  };
}

export interface StaticButton extends Schema.Component {
  collectionName: 'components_static_buttons';
  info: {
    displayName: 'button';
    icon: 'cursor';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
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
    displayName: 'featured Content';
    icon: 'star';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.RichText;
    button: Attribute.Component<'static.button'>;
  };
}

export interface StaticImagesWithDecoration extends Schema.Component {
  collectionName: 'components_static_images_with_decorations';
  info: {
    displayName: 'Images With Decoration';
    icon: 'picture';
  };
  attributes: {
    images: Attribute.Media;
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
    ogTitle: Attribute.String;
    ogDescription: Attribute.Text;
    ogImage: Attribute.Media;
    twitterTitle: Attribute.String;
    twitterDescription: Attribute.Text;
    twitterImage: Attribute.Media;
  };
}

export interface StaticWysiwyg extends Schema.Component {
  collectionName: 'components_static_wysiwygs';
  info: {
    displayName: 'wysiwyg';
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
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'interactive.carousel': InteractiveCarousel;
      'static.button': StaticButton;
      'static.content-preview-grid': StaticContentPreviewGrid;
      'static.content-preview-item': StaticContentPreviewItem;
      'static.featured-content': StaticFeaturedContent;
      'static.images-with-decoration': StaticImagesWithDecoration;
      'static.seo': StaticSeo;
      'static.wysiwyg': StaticWysiwyg;
    }
  }
}
