const { __ } = wp.i18n;

const {
  registerBlockType
} = wp.blocks;

import { edit } from './edit';
import { save } from './save';
import {
  modifyBlockListBlockImageOverlay,
  modifyGetSaveElementImageOverlay,
  setBlockCustomClassName,
} from './utils';

import icon from '../core/icon-bootstrap.svg';

const settings = {
  title: __( 'Card Image Overlay', 'bredecl-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
      __('bredecl-bootstrap-blocks'),
      __('card'),
      __('overlay'),
      __('image'),
  ],
  // attributes: {
  //   allowedBlocks: ['bredecl-bootstrap-blocks/row'],
  //   TEMPLATE: {
  //     type: 'array',
  //     default: [
  //       ['bredecl-bootstrap-blocks/row', {} ,[]]
  //     ]
  //   }
  // },
  edit: edit,
  save: save,
}

registerBlockType(
  'bredecl-bootstrap-blocks/card-image-overlay',
  settings
);

wp.hooks.addFilter(
  'editor.BlockListBlock',
  'bredecl-bootstrap-blocks/card-image-overlay/modify-element-edit',
  modifyBlockListBlockImageOverlay
);

wp.hooks.addFilter(
  'blocks.getSaveElement',
  'bredecl-bootstrap-blocks/card-image-overlay/modify-element-save',
  modifyGetSaveElementImageOverlay
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'bredecl-bootstrap-blocks/card-image-overlay/set-block-custom-class-name',
	setBlockCustomClassName
);
