const {__} = wp.i18n;

const {PanelBody, PanelRow, TextControl} = wp.components;

const {Fragment} = wp.element;

const {InspectorControls, InnerBlocks} = wp.blockEditor;

export const edit = (props) => {
  const {
    attributes: {
      accordionID,
      className,
      TEMPLATE
    },
    setAttributes
  } = props;

  return (<Fragment>
    <Fragment>
      <div className={["accordion", className].join(" ").trim()}>
        <InnerBlocks template={TEMPLATE}
          // allowedBlocks={['bredecl-bootstrap-blocks/row']}
        />
      </div>
    </Fragment>
    <InspectorControls>
      <PanelBody title={__('Accordion Settings', 'bredecl-bootstrap-blocks')} initialOpen={true}>
        <PanelRow>

          <TextControl value={accordionID} label={__('Accordion ID', 'bredecl-bootstrap-blocks')} onChange={(accordionID) => setAttributes({accordionID: accordionID})}/>
        </PanelRow>
      </PanelBody>
    </InspectorControls>
  </Fragment>);
}
