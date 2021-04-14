const {__} = wp.i18n;
import _uniqueId from 'lodash/uniqueId';

const {registerBlockType} = wp.blocks;

import {edit} from './edit';
import {save} from './save';
import {modifyBlockListBlockAccordionCollapse, modifyGetSaveElementAccordionCollapse, setBlockCustomClassName} from './utils';

import icon from '../core/icon-bootstrap.svg';

const settings = {
  title: __('Accordion Collapse', 'bredecl-bootstrap-blocks'),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
    __('bredecl-bootstrap-blocks'), __('accordion')
  ],
  attributes: {
    accordionID: {
      type: 'string',
      default: "accordion-one"
    },
      className: {
        type: 'string',
        default: ''
      },
    itemID: {
      type: 'string',
      default: "collapse-one"
    },
    isActive: {
      type: 'bool',
      default: false
    },
    isCollapsed: {
      type: 'bool',
      default: false
    },
    TEMPLATE: {
      type: 'array',
      default: [
        [
          'core/paragraph', {
            content: __('This is the Collapse #1 Text')
          },
          []
        ]
      ]
    }
  },
  edit: edit,
  save: save
}
registerBlockType('bredecl-bootstrap-blocks/accordion-collapse', settings);
wp.hooks.addFilter('editor.BlockListBlock', 'bredecl-bootstrap-blocks/accordion-collapse/modify-element-edit', modifyBlockListBlockAccordionCollapse);
wp.hooks.addFilter('blocks.getSaveElement', 'bredecl-bootstrap-blocks/accordion-collapse/modify-element-save', modifyGetSaveElementAccordionCollapse);
wp.hooks.addFilter('blocks.getBlockDefaultClassName', 'bredecl-bootstrap-blocks/accordion-collapse/set-block-custom-class-name', setBlockCustomClassName);
