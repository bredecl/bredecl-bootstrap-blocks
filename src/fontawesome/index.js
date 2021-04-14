const {__} = wp.i18n;
import _uniqueId from 'lodash/uniqueId';
const {registerBlockType} = wp.blocks;
import {edit} from './edit';
import {save} from './save';
import {modifyBlockListBlockFAIcon, modifyGetSaveElementFAIcon, setBlockCustomClassName} from './utils';
import icon from '../core/icon-bootstrap.svg';
const settings = {
  title: __('Font Awesome Icon', 'bredecl-bootstrap-blocks'),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
    __('bredecl-bootstrap-blocks'), __('fontawesome')
  ],
  attributes: {
    iconType: {
      type: 'string',
      default: "fab fa-facebook-f"
    },
      iconSize: {
        type: 'string',
        default: "1x"
      },

    classTypeName: {
      type: 'string',
      default: ""
    },
    allowedBlocks: []
  },
  edit: edit,
  save: save
}

registerBlockType('bredecl-bootstrap-blocks/fontawesome', settings);
wp.hooks.addFilter('editor.BlockListBlock', 'bredecl-bootstrap-blocks/fontawesome/modify-element-edit', modifyBlockListBlockFAIcon);
wp.hooks.addFilter('blocks.getSaveElement', 'bredecl-bootstrap-blocks/fontawesome/modify-element-save', modifyGetSaveElementFAIcon);
wp.hooks.addFilter('blocks.getBlockDefaultClassName', 'bredecl-bootstrap-blocks/fontawesome/set-block-custom-class-name', setBlockCustomClassName);
