const { __ } = wp.i18n;

const {
  registerBlockType
} = wp.blocks;

import { edit } from './edit';
import { save } from './save';
import {
  setBlockCustomClassName
} from './utils';

import icon from '../core/icon-bootstrap.svg';

const settings = {
  title: __( 'Button (BS4)', 'bredecl-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
      __('bredecl-bootstrap-blocks'),
      __('button'),
      __('btn'),
  ],
  supports: {
    anchor: true,
  },
  attributes: {
    htmlType: {
      type: 'string',
      default: 'a'
    },
      type: {
        type: 'string',
        default: 'default'
      },
    style: {
      type: 'string',
      default: 'btn-primary'
    },
    outline: {
      type: 'bool',
      default: false
    },
    block: {
      type: 'bool',
      default: false
    },
    text: {
      type: 'string',
      default: 'Button'
    },
    link: {
      type: 'string',
      default: '#'
    },
    size: {
      type: 'string',
      default: ''
    },
    newWindow: {
      type: 'bool',
      default: false
    },
    databstoggle: {
      type: 'string',
      default: ''
    },
    databstarget: {
      type: 'string',
      default: ''
    },
    ariaexpanded: {
      type: 'string',
      default: ''
    },
    ariacontrols: {
      type: 'string',
      default: ''
    },

  },
  edit: edit,
  save: save
}

registerBlockType(
  'bredecl-bootstrap-blocks/button',
  settings
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'bredecl-bootstrap-blocks/button/set-block-custom-class-name',
	setBlockCustomClassName
);
