<?php
/**
 * REST API: Rest_Controller
 *
 * Parent class for all admin routes using the WordPress REST API.
 *
 * @package IMPress_for_IDX_Broker
 */

namespace IDX\Admin;

/**
 * Controller class for admin REST routes
 *
 * All individual routes extend this class.
 */
class Rest_Controller {
	/**
	 * REST route namespace and version.
	 *
	 * @var string
	 */
	public $namespace = 'idxbroker/v1';

	/**
	 * REST subroute name.
	 *
	 * @var string
	 */
	public $resource_name = 'admin';

	/**
	 * Check for if user has persmissions to use REST endpoint.
	 *
	 * @param string $route Route to namespace.
	 * @return string Namespaced route.
	 */
	protected function route_name( $route ) {
		$leading_slash = '/' === $route[0] ? '' : '/';
		return '/' . $this->resource_name . $leading_slash . $route;
	}

	/**
	 * Check if user has persmissions to use REST endpoint.
	 *
	 * @return WP_Error|bool
	 */
	public function admin_check() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return new \WP_Error( 'rest_forbidden', esc_html__( 'You do not have permissions to view this resource.' ), array( 'status' => $this->authorization_failed_status_code() ) );
		}
		return true;
	}

	/**
	 * Checks if IMPress Agents is enabled.
	 *
	 * @return WP_Error|bool
	 */
	public function agents_enabled() {
		$admin_permissions = $this->admin_check();
		if ( true !== $admin_permissions ) {
			return $admin_permissions;
		}
		// TODO: Uncomment code after endpoint for agents enable/disable is compelted.
		// if ( ! boolval( get_option( 'idx_broker_agents_enabled', 0 ) ) ) {
		// 	return $this->addon_not_enabled_error( 'IMPress Agents' );
		// }
		return true;
	}

	/**
	 * Checks if IMPress Listings is enabled.
	 *
	 * @return bool
	 */
	public function listings_enabled() {
		$admin_permissions = $this->admin_check();
		if ( true !== $admin_permissions ) {
			return $admin_permissions;
		}
		// TODO: Uncomment code after endpoint for listings enable/disable is compelted.
		// if ( ! boolval( get_option( 'idx_broker_listings_enabled', 0 ) ) ) {
		// 	return $this->addon_not_enabled_error( 'IMPress Listings' );
		// }
		return true;
	}

	/**
	 * Provides the appropiate status code for failed auth.
	 *
	 * @return int Status code.
	 */
	public function authorization_failed_status_code() {
		$status = 401;

		if ( is_user_logged_in() ) {
			$status = 403;
		}

		return $status;
	}

	/**
	 * Returns WP_Error for invalid value.
	 *
	 * @param string $name Human readable value name for addon.
	 * @return WP_Error
	 */
	public function addon_not_enabled_error( $name ) {
		// Uses same error format as \IDX\IDX_Api.
		return new \WP_Error(
			'addon_disabled',
			"422: $name is not enabled.",
			array(
				'status'  => 422,
				'message' => "$name is not enabled.",
			)
		);
	}
}

new Apis\Settings_General();
new Apis\Agents_Settings();