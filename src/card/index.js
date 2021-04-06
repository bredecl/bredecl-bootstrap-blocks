const { __ } = wp.i18n;
import _uniqueId from 'lodash/uniqueId';

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import { 
  modifyBlockListBlockCard,
  modifyGetSaveElementCard,
  setBlockCustomClassName,
} from './utils';

import icon from '../core/icon-bootstrap.svg'; 

const settings = {
  title: __( 'Card (BS4)', 'bredecl-bootstrap-blocks' ),
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
        ['bredecl-bootstrap-blocks/card-header', {} ,[
          ['core/heading', { className: 'my-0', level: 3, content: __('Card Title') } ,[]],
        ]],
        ['bredecl-bootstrap-blocks/card-body', {} ,[]],
      ]
    }
  },
  edit: edit,
  save: save,
} 

registerBlockType( 
  'bredecl-bootstrap-blocks/card', 
  settings
);

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'bredecl-bootstrap-blocks/card/modify-element-edit', 
  modifyBlockListBlockCard
);

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'bredecl-bootstrap-blocks/card/modify-element-save', 
  modifyGetSaveElementCard
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'bredecl-bootstrap-blocks/card/set-block-custom-class-name',
	setBlockCustomClassName
);