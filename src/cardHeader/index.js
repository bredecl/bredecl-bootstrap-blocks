const { __ } = wp.i18n;

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import { 
  modifyBlockListBlockCardHeader,
  modifyGetSaveElementCardHeader,
  setBlockCustomClassName,
} from './utils';

import icon from '../core/icon-bootstrap.svg'; 

const settings = {
  title: __( 'Card Header (BS4)', 'bredecl-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
      __('bredecl-bootstrap-blocks'),
      __('card'),
      __('header'),
  ],
  attributes: {
    // allowedBlocks: ['bredecl-bootstrap-blocks/row'],
    TEMPLATE: {
      type: 'array',
      default: [
        // ['core/heading', { className: 'mb-0', anchor: newId('a'), level: '2', content: __('Card Title') } ,[]],
      ]
    }
  },
  edit: edit,
  save: save,
} 

registerBlockType( 
  'bredecl-bootstrap-blocks/card-header', 
  settings
);

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'bredecl-bootstrap-blocks/card-header/modify-element-edit', 
  modifyBlockListBlockCardHeader
);

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'bredecl-bootstrap-blocks/card-header/modify-element-save', 
  modifyGetSaveElementCardHeader
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'bredecl-bootstrap-blocks/card-header/set-block-custom-class-name',
	setBlockCustomClassName
);