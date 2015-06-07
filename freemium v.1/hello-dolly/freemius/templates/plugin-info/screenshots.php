<?php
	/**
	 * @var FS_Plugin $plugin
	 */
	$screenshots = $VARS['screenshots'];
?>
	<ol>
		<?php $i = 0; foreach ($screenshots as $s => $url) : ?>
			<?php
			// Relative URLs are replaced with WordPress.org base URL
			// therefore we need to set absolute URLs.
			$url = 'http' . (WP_FS__IS_HTTPS ? 's' : '') . ':' . $url; ?>
			<li>
				<a href="<?php echo $url ?>" title="<?php printf( __('Click to view full-size screenshot %d', WP_FS__SLUG), $i) ?>"><img src="<?php echo $url ?>"></a>
			</li>
		<?php $i++; endforeach ?>
	</ol>
