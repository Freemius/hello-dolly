<?php
	/**
	 * @package     Freemius
	 * @copyright   Copyright (c) 2015, Freemius, Inc.
	 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
	 * @since       1.0.3
	 */

	if ( ! defined( 'ABSPATH' ) ) {
		exit;
	}

	class FS_Entity {
		public $id;
		public $updated;

		/**
		 * @param bool|stdClass $entity
		 */
		function __construct( $entity = false )
		{
			if (!($entity instanceof stdClass))
				return;

			$this->id = $entity->id;
		}

		static function get_type()
		{
			return 'type';
		}

		/**
		 * @author Vova Feldman (@svovaf)
		 * @since  1.0.6
		 *
		 * @param \FS_Entity $entity1
		 * @param \FS_Entity $entity2
		 *
		 * @return bool
		 */
		static function equals($entity1, $entity2)
		{
			if (is_null($entity1) && is_null($entity2))
				return true;
			else if (is_object($entity1) && is_object($entity2))
				return ($entity1->id == $entity2->id);
			else if (is_object($entity1))
				return is_null($entity1->id);
			else
				return is_null($entity2->id);
		}
	}