const {
  InnerBlocks
} = wp.blockEditor;

export const edit = (props) => {
  return (
    <div 
      {...props.attributes.anchor ? { id: props.attributes.anchor } : { } }
    >
      <InnerBlocks />
    </div>
  );
}