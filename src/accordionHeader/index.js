const { __ } = wp.i18n;
import _uniqueId from 'lodash/uniqueId';

const {
  registerBlockType
} = wp.blocks;

import { edit } from './edit';
import { save } from './save';
import {
  modifyBlockListBlockAccordionHeader,
  modifyGetSaveElementAccordionHeader,
  setBlockCustomClassName,
} from './utils';

import icon from '../core/icon-bootstrap.svg';

const settings = {
  title: __( 'Accordion Header', 'bredecl-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
      __('bredecl-bootstrap-blocks'),
      __('accordion')
  ],
  attributes: {


      itemID: {
        type: 'string',
        default: "header-one"
      },
        className: {
          type: 'string',
          default: ''
        },
      isActive: {
        type: 'bool',
        default: false
      },
      isCollapsed: {
        type: 'bool',
        default: false
      },
   allowedBlocks: ['bredecl-bootstrap-blocks/button'],
    TEMPLATE: {
      type: 'array',
      default: [
        ['bredecl-bootstrap-blocks/button',{text:__("Collapse #1")} ,[]]
      ]
    }
  },
  edit: edit,
  save: save,
}

registerBlockType(
  'bredecl-bootstrap-blocks/accordion-header',
  settings
);

wp.hooks.addFilter(
  'editor.BlockListBlock',
  'bredecl-bootstrap-blocks/accordion-header/modify-element-edit',
  modifyBlockListBlockAccordionHeader
);

wp.hooks.addFilter(
  'blocks.getSaveElement',
  'bredecl-bootstrap-blocks/accordion-header/modify-element-save',
  modifyGetSaveElementAccordionHeader
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'bredecl-bootstrap-blocks/accordion-header/set-block-custom-class-name',
	setBlockCustomClassName
);
