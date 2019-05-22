( function( blocks, element ) {
	var el = wp.element.createElement
	var registerBlockType = wp.blocks.registerBlockType
	var icon = el('i', {class: "fa fa-cog fa-2x"}, null )  

	blocks.registerBlockType( 'idx-broker-platinum/idx-wrapper-tags-block', {
		title: 'IDX Broker Wrapper Tags',
		icon: icon,
		category: 'widgets',

		edit: function( props ) {
			return [
				el( "div", {
					className: "idx-wrapper-tag-block-preview"
				}, el("img", {
					src: idx_wrapper_tags_image_url,
					height: "45",
					width: "110"
				}), el("div", null, "IDX Broker Wrapper Tags"))
			]
		},

		save: function(props) {
			return el( 
				element.RawHTML, 
				null, 
				'<div id="idxStart"></div><div id="idxStop"></div>' 
			);
		},
	} );
} )(
	window.wp.blocks,
	window.wp.element
);

