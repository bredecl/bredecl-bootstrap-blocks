const { __ } = wp.i18n;

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import { 
  modifyBlockListBlockCardBody,
  modifyGetSaveElementCardBody,
  setBlockCustomClassName,
} from './utils';

import icon from '../core/icon-bootstrap.svg'; 

const settings = {
  title: __( 'Card Body (BS4)', 'bredecl-bootstrap-blocks' ),
  description: __(''),
  // icon: 'layout',
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
      __('bredecl-bootstrap-blocks'),
      __('card'),
      __('body'),
  ],
  attributes: {
    // allowedBlocks: ['bredecl-bootstrap-blocks/row'],
    TEMPLATE: {
      type: 'array',
      default: [
        ['core/paragraph', {content: __('Some quick example text to build on the card title and make up the bulk of the card\'s content.') } ,[]],
      ]
    }
  },
  edit: edit,
  save: save,
} 

registerBlockType( 
  'bredecl-bootstrap-blocks/card-body', 
  settings
);

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'bredecl-bootstrap-blocks/card-body/modify-element-edit', 
  modifyBlockListBlockCardBody
);

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'bredecl-bootstrap-blocks/card-body/modify-element-save', 
  modifyGetSaveElementCardBody
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'bredecl-bootstrap-blocks/card-body/set-block-custom-class-name',
	setBlockCustomClassName
);