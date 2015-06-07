<h2><?php _e('Plugins Installs / Sites', WP_FS__SLUG) ?></h2>
<?php
	/**
	 * @var FS_Site[] $sites
	 */
	$sites = $VARS['sites'];
?>
<table id="fs_addons" class="widefat">
	<thead>
	<tr>
		<th>ID</th>
		<th>Plugin</th>
		<th>Plan</th>
		<th>Public Key</th>
		<th>Secret Key</th>
	</tr>
	</thead>
	<tbody>
<?php foreach ($sites as $plugin_basename => $site) : ?>
		<tr>
			<td><?php echo $site->id ?></td>
			<td><?php echo dirname($plugin_basename) ?></td>
			<td><?php
					echo is_object($site->plan) ? $site->plan->name : ''
				?></td>
			<td><?php echo $site->public_key ?></td>
			<td><?php echo $site->secret_key ?></td>
		</tr>
<?php endforeach ?>
	</tbody>
</table>
<h2><?php _e('Users', WP_FS__SLUG) ?></h2>
<?php
	/**
	 * @var FS_User[] $users
	 */
	$users = $VARS['users'];
?>
<table id="fs_addons" class="widefat">
	<thead>
	<tr>
		<th>ID</th>
		<th>Name</th>
		<th>Email</th>
		<th>Verified</th>
		<th>Public Key</th>
		<th>Secret Key</th>
	</tr>
	</thead>
	<tbody>
	<?php foreach ($users as $user_id => $user) : ?>
		<tr>
			<td><?php echo $user->id ?></td>
			<td><?php echo $user->get_name() ?></td>
			<td><?php echo $user->email ?></td>
			<td><?php echo json_encode($user->is_verified) ?></td>
			<td><?php echo $user->public_key ?></td>
			<td><?php echo $user->secret_key ?></td>
		</tr>
	<?php endforeach ?>
	</tbody>
</table>
<br><br>
<form action="" method="POST">
	<input type="hidden" name="fs_action" value="delete_all_accounts">
	<?php wp_nonce_field('delete_all_accounts') ?>
	<button class="button button-primary" onclick="if (confirm('<?php _e('Are you sure you want to delete the all Freemius data?', WP_FS__SLUG) ?>')) this.parentNode.submit(); return false;"><?php _e('Delete All Accounts', WP_FS__SLUG) ?></button>
</form>