const {__} = wp.i18n;

const {registerBlockType, getBlockDefaultClassName} = wp.blocks;

const {Fragment} = wp.element;

const {InnerBlocks} = wp.blockEditor;

import {edit} from './edit';
import {save} from './save';
import {modifyBlockListBlockAccordion, modifyGetSaveElementAccordion, setBlockCustomClassName, setBlockAttributes} from './utils';

import icon from '../core/icon-bootstrap.svg';

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/accordion");

const settings = {
  title: __('Accordion', 'bredecl-bootstrap-blocks'),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
    __('bredecl-bootstrap-blocks'), __('accordion')
  ],
  supports: {
    anchor: true
  },
  attributes: {
    className: {
      type: 'string',
      default: ''
    },
    accordionID: {
      type: 'string',
      default: "accordion-one"
    },
    allowedBlocks: [
      'bredecl-bootstrap-blocks/accordion-item', 'bredecl-bootstrap-blocks/accordion-header', 'bredecl-bootstrap-blocks/accordion-collapse', 'bredecl-bootstrap-blocks/button'
    ],
    TEMPLATE: {
      type: 'array',
      default: [

        [
          'bredecl-bootstrap-blocks/accordion-item', {
            itemID: "item-one",
            isActive: true,
            isCollapsed: false
          },
          [
            [
              'bredecl-bootstrap-blocks/accordion-header', {
                itemID: "item-one",
                isActive: true,
                isCollapsed: false
              },
              [
                [
                  'bredecl-bootstrap-blocks/button', {
                    text: __('Collapse #1'),
                    databstoggle: "collapse",
                    databstarget: "collapse-item-one",
                    ariaexpanded: "false",
                    ariacontrols: "item-one",
                    className: "accordion-button",
                    htmlType: "button"
                  }
                ]
              ]
            ],
            [
              'bredecl-bootstrap-blocks/accordion-collapse', {
                accordionID: "accordion-one",
                itemID: "item-one",
                isActive: true,
                isCollapsed: false
              },
              [
                [
                  'core/paragraph', {
                    content: __('This is the Collapse #1 Text')
                  }
                ]
              ]
            ]
          ]
        ],
        [
          'bredecl-bootstrap-blocks/accordion-item', {
            itemID: "item-two",
            isActive: false,
            isCollapsed: true
          },
          [
            [
              'bredecl-bootstrap-blocks/accordion-header', {
                itemID: "item-two",
                isActive: false,
                isCollapsed: true
              },
              [
                [
                  'bredecl-bootstrap-blocks/button', {
                    text: __('Collapse #2'),
                    databstoggle: "collapse",
                    databstarget: "collapse-item-two",
                    ariaexpanded: "false",
                    ariacontrols: "item-two",
                    className: "accordion-button",
                    htmlType: "button"
                  }
                ]
              ]
            ],
            [
              'bredecl-bootstrap-blocks/accordion-collapse', {
                accordionID: "accordion-one",
                itemID: "item-two",
                isActive: false,
                isCollapsed: true
              },
              [
                [
                  'core/paragraph', {
                    content: __('This is the Collapse #2 Text')
                  }
                ]
              ]
            ]
          ]
        ],
        [
          'bredecl-bootstrap-blocks/accordion-item', {
            itemID: "item-three",
            isActive: false,
            isCollapsed:true
          },
          [
            [
              'bredecl-bootstrap-blocks/accordion-header', {
                itemID: "item-three",
                isActive: false,
                isCollapsed: true
              },
              [
                [
                  'bredecl-bootstrap-blocks/button', {
                    text: __('Collapse #3'),
                    databstoggle: "collapse",
                    databstarget: "collapse-item-three",
                    ariaexpanded: "false",
                    ariacontrols: "item-three",
                    className: "accordion-button",
                    htmlType: "button"
                  }
                ]
              ]
            ],
            [
              'bredecl-bootstrap-blocks/accordion-collapse', {
                accordionID: "accordion-one",
                itemID: "item-three",
                isActive: false,
                isCollapsed: true
              },
              [
                [
                  'core/paragraph', {
                    content: __('This is the Collapse #3 Text')
                  }
                ]
              ]
            ]
          ]
        ]
      ]

    }
  },
  edit: edit,
  save: save
}

registerBlockType('bredecl-bootstrap-blocks/accordion', settings);

wp.hooks.addFilter('editor.BlockListBlock', 'bredecl-bootstrap-blocks/accordion/modify-element-edit', modifyBlockListBlockAccordion);

wp.hooks.addFilter('blocks.getSaveElement', 'bredecl-bootstrap-blocks/accordion/modify-element-save', modifyGetSaveElementAccordion);

wp.hooks.addFilter('blocks.getBlockDefaultClassName', 'bredecl-bootstrap-blocks/accordion/set-block-custom-class-name', setBlockCustomClassName);

// wp.hooks.addFilter(
// 	'blocks.getBlockAttributes',
// 	'bredecl-bootstrap-blocks/container/set-block-attributes',
// 	setBlockAttributes
// );

// const fixForRenamedBlockClassNames = (props, blockType, attributes) => {
//   if (blockType.name === 'bredecl-bootstrap-blocks/container') {
//       if (props.className.includes(defaultClassName)) {
//           props.className = props.className.replace(`${defaultClassName} `, '');
//       }
//   }
//   return props;
// };

// wp.hooks.addFilter(
//   'blocks.getSaveContent.extraProps',
//   'bredecl-bootstrap-blocks/container/block-filters',
//   fixForRenamedBlockClassNames
// );
