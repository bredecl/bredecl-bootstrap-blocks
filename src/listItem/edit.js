const {__} = wp.i18n;
const {InspectorControls, InnerBlocks} = wp.blockEditor;
const {PanelBody, PanelRow,SelectControl} = wp.components;
const {Fragment} = wp.element;
export const edit = (props) => {
  const {
    attributes: {
      listItemType,
      className,
      TEMPLATE
    },
    setAttributes
  } = props;

  const onChangeToggleActive = () => {
    setAttributes({
      isActive: !isActive
    });
  }
  const onChangeToggleActiveCollapsed = () => {
    setAttributes({
      isCollapsed: !isCollapsed
    });
  }
  return (<Fragment>
    <Fragment>
      <InnerBlocks template={TEMPLATE}/>
    </Fragment>


  </Fragment>);
}
