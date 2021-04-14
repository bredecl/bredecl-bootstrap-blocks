const { __ } = wp.i18n;
import _uniqueId from 'lodash/uniqueId';

const {
  registerBlockType
} = wp.blocks;

import { edit } from './edit';
import { save } from './save';
import {
  modifyBlockListBlockDiv,
  modifyGetSaveElementDiv,
  setBlockCustomClassName,
} from './utils';

import icon from '../core/icon-bootstrap.svg';

const settings = {
  title: __( 'Div', 'bredecl-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
      __('bredecl-bootstrap-blocks'),
      __('card'),
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
  'bredecl-bootstrap-blocks/div',
  settings
);

wp.hooks.addFilter(
  'editor.BlockListBlock',
  'bredecl-bootstrap-blocks/div/modify-element-edit',
  modifyBlockListBlockDiv
);

wp.hooks.addFilter(
  'blocks.getSaveElement',
  'bredecl-bootstrap-blocks/div/modify-element-save',
  modifyGetSaveElementDiv
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'bredecl-bootstrap-blocks/div/set-block-custom-class-name',
	setBlockCustomClassName
);
