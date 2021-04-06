const { __ } = wp.i18n;

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import { 
  modifyBlockListBlockButtonGroup,
  modifyGetSaveElementButtonGroup,
  setBlockCustomClassName,
} from './utils';

import icon from '../core/icon-bootstrap.svg'; 

const settings = {
  title: __( 'Button Group (BS4)', 'bredecl-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
      __('bredecl-bootstrap-blocks'),
      __('button'),
      __('btn'),
      __('group'),
  ],
  attributes: {
    ariaLabel: {
      type: 'string',
      default: 'Button Group'
    },
    allowedBlocks: ['bredecl-bootstrap-blocks/button', ''],
    TEMPLATE: {
      type: 'array',
      default: [
        ['bredecl-bootstrap-blocks/button', {} ,[]],
        ['bredecl-bootstrap-blocks/button', {} ,[]]
      ]
    }
  },
  edit: edit,
  save: save,
} 

registerBlockType( 
  'bredecl-bootstrap-blocks/button-group', 
  settings
);

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'bredecl-bootstrap-blocks/button-group/modify-element-edit', 
  modifyBlockListBlockButtonGroup
);

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'bredecl-bootstrap-blocks/button-group/modify-element-save', 
  modifyGetSaveElementButtonGroup
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'bredecl-bootstrap-blocks/button-group/set-block-custom-class-name',
	setBlockCustomClassName
);