const {__} = wp.i18n;
import _uniqueId from 'lodash/uniqueId';
const {registerBlockType} = wp.blocks;
import {edit} from './edit';
import {save} from './save';
import {modifyBlockListBlockLink, modifyGetSaveElementLink, setBlockCustomClassName} from './utils';
import icon from '../core/icon-bootstrap.svg';
const settings = {
  title: __('Link', 'bredecl-bootstrap-blocks'),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
    __('bredecl-bootstrap-blocks'), __('link')
  ],
  attributes: {
    whereToLink: {
      type: 'string',
      default: ""
    },
      target: {
        type: 'string',
        default: "_blank"
      },
    className: {
      type: 'string',
      default: ""
    },
    allowedBlocks: [],
    TEMPLATE: {
      type: 'array',
      default: [
        [
          'core/paragraph', {
            content: __('This is the link Text')
          },
          []
        ]

      ]
    }
  },
  edit: edit,
  save: save
}

registerBlockType('bredecl-bootstrap-blocks/link', settings);
wp.hooks.addFilter('editor.BlockListBlock', 'bredecl-bootstrap-blocks/link/modify-element-edit', modifyBlockListBlockLink);
wp.hooks.addFilter('blocks.getSaveElement', 'bredecl-bootstrap-blocks/link/modify-element-save', modifyGetSaveElementLink);
wp.hooks.addFilter('blocks.getBlockDefaultClassName', 'bredecl-bootstrap-blocks/link/set-block-custom-class-name', setBlockCustomClassName);
