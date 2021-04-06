const { __ } = wp.i18n;

const {
  registerBlockType
} = wp.blocks;

import { edit } from './edit';
import { save } from './save';
import {
  modifyBlockListBlockCardImage,
  modifyGetSaveElementCardImage,
  setBlockCustomClassName,
} from './utils';

import icon from '../core/icon-bootstrap.svg';

const settings = {
  title: __( 'Card Image', 'bredecl-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
      __('bredecl-bootstrap-blocks'),
      __('card'),
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
  'bredecl-bootstrap-blocks/card-image',
  settings
);

wp.hooks.addFilter(
  'editor.BlockListBlock',
  'bredecl-bootstrap-blocks/card-image/modify-element-edit',
  modifyBlockListBlockCardImage
);

wp.hooks.addFilter(
  'blocks.getSaveElement',
  'bredecl-bootstrap-blocks/card-image/modify-element-save',
  modifyGetSaveElementCardImage
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'bredecl-bootstrap-blocks/card-image/set-block-custom-class-name',
	setBlockCustomClassName
);
