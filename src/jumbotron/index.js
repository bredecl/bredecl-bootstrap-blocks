const { __ } = wp.i18n;

const { 
  createHigherOrderComponent 
} = wp.compose;

const { 
  registerBlockType,
  getBlockDefaultClassName
} = wp.blocks;

const {
  Toolbar,
  Button,
  Tooltip,
  Panel,
  PanelBody,
  PanelRow,
  FormToggle,
  RangeControl
} = wp.components;

const {
  Fragment
} = wp.element; 

const {
  RichText,
  AlignmentToolbar,
  BlockControls,
  BlockAlignmentToolbar,
  InspectorControls,
  InnerBlocks
} = wp.blockEditor;

import icon from '../core/icon-bootstrap.svg'; 

registerBlockType('bredecl-bootstrap-blocks/jumbotron', {
  title: __('Jumbotron (BS4)', 'bredecl-bootstrap-blocks'),
  description: __(''),
  icon: icon,
  category: 'bredecl-bootstrap-blocks',
  keywords: [
      __('bredecl-bootstrap-blocks'),
      __('jumbotron'),
  ],
  supports: {
    anchor: true,
  },
  attributes: {
      customClassName: true,
      content: {
          type: 'array',
          source: 'children',
      },
      // allowedBlocks: ['bredecl-bootstrap-blocks/card'],
      TEMPLATE: {
        type: 'array',
        default: [
          // ['bredecl-bootstrap-blocks/card', {} ,[]],
          // ['bredecl-bootstrap-blocks/card', {} ,[]],
          // ['bredecl-bootstrap-blocks/card', {} ,[]]
        ]
      },
  },
  edit: function( props ) {
    const {
      className,
      attributes: {
        anchor,
        TEMPLATE,
      },
      setAttributes
    } = props;

    return (
      <div 
        {...anchor ? { id: anchor } : { } }
        className={props.className}
      >
        <InnerBlocks 
          template={ TEMPLATE }
          // allowedBlocks={['bredecl-bootstrap-blocks/card']}
        /> 
      </div>
    );
  },
  save: function( props ) {
    return (
      <Fragment>
          <InnerBlocks.Content />
      </Fragment>
    );  
  }
});

const defaultClassName = getBlockDefaultClassName("bredecl-bootstrap-blocks/jumbotron");

const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'bredecl-bootstrap-blocks/jumbotron/set-block-custom-class-name',
	setBlockCustomClassName
);

const modifyBlockListBlockRow = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {
      if (props.block.name == "bredecl-bootstrap-blocks/jumbotron") {
        return <BlockListBlock { ...props } className="jumbotron"/>;
      }
      return <BlockListBlock { ...props } />;
    };
}, 'modifyBlockListBlockRow' );

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'bredecl-bootstrap-blocks/jumbotron/modify-element-edit', 
  modifyBlockListBlockRow 
);

const modifyGetSaveElementRow = (element, blockType, attributes ) => {
	if (!element) {
		return;
	}

  if (blockType.name == 'bredecl-bootstrap-blocks/jumbotron') {
    return (
      <div 
        {...attributes.anchor ? { id: attributes.anchor } : null } 
        className={ ["jumbotron", element.props.className].join(" ").trim() }
      >
        {element}
      </div>
    )
  }

	return element;
}

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'bredecl-bootstrap-blocks/jumbotron/modify-element-save', 
  modifyGetSaveElementRow
);
