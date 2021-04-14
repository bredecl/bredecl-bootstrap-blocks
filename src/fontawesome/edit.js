const {__} = wp.i18n;
const {InspectorControls, InnerBlocks} = wp.blockEditor;
const {PanelBody, PanelRow, SelectControl} = wp.components;
const {Fragment} = wp.element;
import {
  fontAwesome
} from '../lib';

export const edit = (props) => {
  const {
    attributes: {
      iconType,
      iconSize,
      classTypeName,
      TEMPLATE
    },
    setAttributes
  } = props;
  return (<Fragment>
    <Fragment>

    </Fragment>
    <InspectorControls>
      <PanelBody title={__('Font Awesome', 'bredecl-bootstrap-blocks')} initialOpen={true}>
        <PanelRow className="mt-0">
          <SelectControl label="Icon Type" value={iconType} className="d-block w-100 mb-2" options={fontAwesome} onChange={(iconType) => {
              setAttributes({iconType})
            }}/>
        </PanelRow>
          <PanelRow className="mt-0">
          <SelectControl label="Icon Size" value={iconSize} className="d-block w-100 mb-2" options={[

            {label: '1x',value: 'fa-1x'},
            {label: '2x',value: 'fa-2x'},
            {label: '3x',value: 'fa-3x'},
            {label: '4x',value: 'fa-4x'},
            {label: '5x',value: 'fa-5x'},
            {label: '6x',value: 'fa-6x'},
            {label: '7x',value: 'fa-7x'},
            {label: '8x',value: 'fa-8x'},
            {label: '9x',value: 'fa-9x'},
            {label: '10x',value: 'fa-10x'}
              ]} onChange={(iconSize) => {
                setAttributes({iconSize})
              }}/>
          </PanelRow>

      </PanelBody>
    </InspectorControls>
  </Fragment>);
}
