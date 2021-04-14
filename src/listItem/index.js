const {__} = wp.i18n;
import _uniqueId from 'lodash/uniqueId';
const {registerBlockType} = wp.blocks;
import {edit} from './edit';
import {save} from './save';
import {modifyBlockListBlockListItem, modifyGetSaveElementListItem, setBlockCustomClassName} from './utils';
import icon from '../core/icon-bootstrap.svg';
const settings = {
  title: __('Bootstrap List Item', 'bredecl-bootstrap-blocks'),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
    __('bredecl-bootstrap-blocks'), __('list')
  ],
  attributes: {
    listItemType: {
      type: 'string',
      default: "li"
    },
    className: {
      type: 'string',
      default: "list-group-item"
    },
    allowedBlocks: [],
    TEMPLATE: {
      type: 'array',
      default: [
        [
          'core/paragraph', {
            content: __('This is the list Text')
          },
          []
        ]

      ]
    }
  },
  edit: edit,
  save: save
}

registerBlockType('bredecl-bootstrap-blocks/list-item', settings);
wp.hooks.addFilter('editor.BlockListBlock', 'bredecl-bootstrap-blocks/list-item/modify-element-edit', modifyBlockListBlockListItem);
wp.hooks.addFilter('blocks.getSaveElement', 'bredecl-bootstrap-blocks/list-item/modify-element-save', modifyGetSaveElementListItem);
wp.hooks.addFilter('blocks.getBlockDefaultClassName', 'bredecl-bootstrap-blocks/list-item/set-block-custom-class-name', setBlockCustomClassName);
