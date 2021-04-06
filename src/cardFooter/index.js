const { __ } = wp.i18n;

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import { 
  modifyBlockListBlockCardFooter,
  modifyGetSaveElementCardFooter,
  setBlockCustomClassName,
} from './utils';

import icon from '../core/icon-bootstrap.svg'; 

const settings = {
  title: __( 'Card Footer (BS4)', 'bredecl-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
      __('bredecl-bootstrap-blocks'),
      __('card'),
      __('footer'),
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
  'bredecl-bootstrap-blocks/card-footer', 
  settings
);

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'bredecl-bootstrap-blocks/card-footer/modify-element-edit', 
  modifyBlockListBlockCardFooter
);

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'bredecl-bootstrap-blocks/card-footer/modify-element-save', 
  modifyGetSaveElementCardFooter
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'bredecl-bootstrap-blocks/card-footer/set-block-custom-class-name',
	setBlockCustomClassName
);