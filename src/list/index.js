const {__} = wp.i18n;
import _uniqueId from 'lodash/uniqueId';
const {registerBlockType} = wp.blocks;
import {edit} from './edit';
import {save} from './save';
import {modifyBlockListBlockList, modifyGetSaveElementList, setBlockCustomClassName} from './utils';
import icon from '../core/icon-bootstrap.svg';
const settings = {
  title: __('Bootstrap List', 'bredecl-bootstrap-blocks'),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
    __('bredecl-bootstrap-blocks'), __('list')
  ],
  attributes: {
    listType: {
      type: 'string',
      default: "ul"
    },
    classTypeName: {
      type: 'string',
      default: "list-group"
    },
    allowedBlocks: [],
    TEMPLATE: {
      type: 'array',
      default: [
        [
          'bredecl-bootstrap-blocks/list-item', {
            content: __('This is the list Text'),
            className:"list-group-item"
          },
          []
        ],
        [
          'bredecl-bootstrap-blocks/list-item', {
            content: __('This is the list Text'),
            className:"list-group-item"
          },
          []
        ],
        [
          'bredecl-bootstrap-blocks/list-item', {
            content: __('This is the list Text'),
            className:"list-group-item"
          },
          []
        ]

      ]
    }
  },
  edit: edit,
  save: save
}

registerBlockType('bredecl-bootstrap-blocks/list', settings);
wp.hooks.addFilter('editor.BlockListBlock', 'bredecl-bootstrap-blocks/list/modify-element-edit', modifyBlockListBlockList);
wp.hooks.addFilter('blocks.getSaveElement', 'bredecl-bootstrap-blocks/list/modify-element-save', modifyGetSaveElementList);
wp.hooks.addFilter('blocks.getBlockDefaultClassName', 'bredecl-bootstrap-blocks/list/set-block-custom-class-name', setBlockCustomClassName);
