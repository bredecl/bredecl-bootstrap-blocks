const { __ } = wp.i18n;
import _uniqueId from 'lodash/uniqueId';

const {
  registerBlockType
} = wp.blocks;

import { edit } from './edit';
import { save } from './save';
import {
  modifyBlockListBlockCardImageOverlayContent,
  modifyGetSaveElementCardImageOverlayContent,
  setBlockCustomClassName,
} from './utils';

import icon from '../core/icon-bootstrap.svg';

const settings = {
  title: __( 'Card Image-Overlay Content', 'bredecl-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
      __('bredecl-bootstrap-blocks'),
      __('card'),
      __('container'),
  ],
  attributes: {
    // allowedBlocks: ['bredecl-bootstrap-blocks/row'],
    TEMPLATE: {
      type: 'array',
      default: [ 
      ]
    }
  },
  edit: edit,
  save: save,
}

registerBlockType(
  'bredecl-bootstrap-blocks/card-image-overlay-content',
  settings
);

wp.hooks.addFilter(
  'editor.BlockListBlock',
  'bredecl-bootstrap-blocks/card-image-overlay-content/modify-element-edit',
  modifyBlockListBlockCardImageOverlayContent
);

wp.hooks.addFilter(
  'blocks.getSaveElement',
  'bredecl-bootstrap-blocks/card-image-overlay-content/modify-element-save',
  modifyGetSaveElementCardImageOverlayContent
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'bredecl-bootstrap-blocks/card-image-overlay-content/set-block-custom-class-name',
	setBlockCustomClassName
);
