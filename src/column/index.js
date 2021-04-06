const { __ } = wp.i18n;

const { 
  registerBlockType,
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import { 
  modifyBlockListBlockColumn,
  modifyGetSaveElementColumn,
  setBlockCustomClassName,
} from './utils';

import icon from '../core/icon-bootstrap.svg'; 

registerBlockType('bredecl-bootstrap-blocks/column', {
  title: __('Column (BS4)', 'bredecl-bootstrap-blocks'),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
      __('bredecl-bootstrap-blocks'),
      __('column'),
  ],
  supports: {
    anchor: true,
  },
  attributes: {
      customClassName: true,
      content: {
          type: 'array',
          source: 'children',
      },
  },
  edit: edit,
  save: save
});

wp.hooks.addFilter(
  'editor.BlockListBlock', 
  'bredecl-bootstrap-blocks/column/modify-element-edit', 
  modifyBlockListBlockColumn 
);

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'bredecl-bootstrap-blocks/column/modify-element-save', 
  modifyGetSaveElementColumn
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'bredecl-bootstrap-blocks/column/set-block-custom-class-name',
	setBlockCustomClassName
);