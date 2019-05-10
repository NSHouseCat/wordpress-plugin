( function( blocks, element ) {
	var el = wp.element.createElement
	var ServerSideRender = wp.components.ServerSideRender
	var registerBlockType = wp.blocks.registerBlockType
	var InspectorControls = wp.editor.InspectorControls
	var Checkbox = wp.components.CheckboxControl
	var icon = el('i', {class: "fa fa-users fa-2x"}, null )  

	blocks.registerBlockType( 'idx-broker-platinum/impress-lead-login-block', {
		title: 'IMPress Lead Login',
		icon: icon,
		category: 'widgets',

		attributes: {
			styles: {
				type: 'int'
			},
			new_window: {
				type: 'int'
			},
			password_field: {
				type: 'bool'
			},
		},

		edit: function( props ) {
			return [
				el( ServerSideRender, {
					block: 'idx-broker-platinum/impress-lead-login-block',
					attributes: props.attributes,
				} ),

				el( InspectorControls, {},
					el( Checkbox, {
						label: 'Default Styles?',
						value: props.attributes.styles,
						checked: (props.attributes.styles > 0 ? true : false) ,
						onChange: ( value ) => { props.setAttributes( { styles: (value > 0 ? 1 : 0 ) } ); },
					} )
				),

				el( InspectorControls, {},
					el( Checkbox, {
						label: 'Open in a New Window?',
						value: props.attributes.new_window,
						checked: (props.attributes.new_window > 0 ? true : false),
						onChange: ( value ) => { props.setAttributes( { new_window: (value > 0 ? 1 : 0 ) } ); },
					} )
				),

				el( InspectorControls, {},
					el( Checkbox, {
						label: 'Add password form field?',
						value: props.attributes.password_field,
						checked: (props.attributes.password_field ? true : false),
						onChange: ( value ) => { props.setAttributes( { password_field: value } ); },
					} )
				),
			]
		},

		save: function(props) {
			return el(
				null,
				null,
				props.attributes.content
			);
		}

	} );
} )(
	window.wp.blocks,
	window.wp.element
);
