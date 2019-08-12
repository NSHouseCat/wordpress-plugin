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
				el( "div", null, el("img", {
					src: idx_wrapper_tags_image_url
				}), el("div", null, ""))
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

