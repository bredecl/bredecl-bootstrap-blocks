const {__} = wp.i18n;
import _uniqueId from 'lodash/uniqueId';
const {registerBlockType} = wp.blocks;
import {edit} from './edit';
import {save} from './save';
import {modifyBlockListBlockAccordionItem, modifyGetSaveElementAccordionItem, setBlockCustomClassName} from './utils';
import icon from '../core/icon-bootstrap.svg';
const settings = {
  title: __('Accordion Item', 'bredecl-bootstrap-blocks'),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
    __('bredecl-bootstrap-blocks'), __('accordion')
  ],
  attributes: {
    itemID: {
      type: 'string',
      default: "item-one"
    },
    accordionID: {
      type: 'string',
      default: "item-one"
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
    allowedBlocks: [
      'bredecl-bootstrap-blocks/accordion-header', 'bredecl-bootstrap-blocks/accordion-content'
    ],
    TEMPLATE: {
      type: 'array',
      default: [

        [
          'bredecl-bootstrap-blocks/accordion-header', {}, []
        ],
        [
          'bredecl-bootstrap-blocks/accordion-collapse', {}, []
        ]

      ]
    }
  },
  edit: edit,
  save: save
}

registerBlockType('bredecl-bootstrap-blocks/accordion-item', settings);
wp.hooks.addFilter('editor.BlockListBlock', 'bredecl-bootstrap-blocks/accordion-item/modify-element-edit', modifyBlockListBlockAccordionItem);
wp.hooks.addFilter('blocks.getSaveElement', 'bredecl-bootstrap-blocks/accordion-item/modify-element-save', modifyGetSaveElementAccordionItem);
wp.hooks.addFilter('blocks.getBlockDefaultClassName', 'bredecl-bootstrap-blocks/accordion-item/set-block-custom-class-name', setBlockCustomClassName);
