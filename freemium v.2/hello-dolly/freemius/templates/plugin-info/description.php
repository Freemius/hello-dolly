<?php
	/**
	 * @var FS_Plugin $plugin
	 */
	$plugin = $VARS['plugin'];

	if (!empty($plugin->info->selling_point_0) ||
	    !empty($plugin->info->selling_point_1) ||
	    !empty($plugin->info->selling_point_2)
	) : ?>
		<div class="fs-selling-points">
			<ul>
				<?php for ($i = 0; $i < 3; $i++) : ?>
					<?php if (!empty($plugin->info->{'selling_point_' . $i})) : ?>
						<li><i class="dashicons dashicons-yes"></i><h3><?php _e($plugin->info->{'selling_point_' . $i}, WP_FS__SLUG) ?></h3></li>
					<?php endif ?>
				<?php endfor ?>
			</ul>
		</div>
		<div>
			<?php
				echo wp_kses($plugin->info->description, array(
					'a' => array( 'href' => array(), 'title' => array(), 'target' => array()),
					'b' => array(),
					'i' => array(),
					'p' => array(),
					'blockquote' => array(),
					'h2' => array(), 'h3' => array(),
					'ul' => array(), 'ol' => array(), 'li' => array()
				));
			?>
		</div>
	<?php endif ?>
	<?php if (!empty($plugin->info->screenshots)) : ?>
		<?php $screenshots = $plugin->info->screenshots ?>
		<div class="fs-screenshots clearfix">
			<h2><?php _e('Screenshots', WP_FS__SLUG) ?></h2>
			<ul>
				<?php $i = 0; foreach ($screenshots as $s => $url) : ?>
					<?php
					// Relative URLs are replaced with WordPress.org base URL
					// therefore we need to set absolute URLs.
					$url = 'http' . (WP_FS__IS_HTTPS ? 's' : '') . ':' . $url; ?>
					<li class="<?php echo (0 === $i % 2) ? 'odd' : 'even' ?>">
						<style>
							#section-description .fs-screenshots .fs-screenshot-<?php echo $i ?> {
								background-image: url('<?php echo $url ?>');
							}
						</style>
						<a href="<?php echo $url ?>" title="<?php printf( __('Click to view full-size screenshot %d', WP_FS__SLUG), $i) ?>" class="fs-screenshot-<?php echo $i ?>"></a>
					</li>
					<?php $i++; endforeach ?>
			</ul>
		</div>
	<?php endif ?>