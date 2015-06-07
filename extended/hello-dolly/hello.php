<?php
	/**
	 * @package Hello_Dolly
	 * @version 1.6
	 */
	/*
	Plugin Name: Hello Dolly Freemium
	Plugin URI: http://wordpress.org/plugins/hello-dolly/
	Description: This is not just a plugin, it symbolizes the hope and enthusiasm of an entire generation summed up in two words sung most famously by Louis Armstrong: Hello, Dolly. When activated you will randomly see a lyric from <cite>Hello, Dolly</cite> in the upper right of your admin screen on every page.
	Author: Matt Mullenweg
	Version: 1.6
	Author URI: http://ma.tt/
	*/

	/**
	 * Adds simple menu item + settings page to admin dashboard.
	 */
	function hello_dolly_admin_menu() {
		add_object_page(
			__('Hello Dolly', 'hello-dolly'),
			__('Hello Dolly', 'hello-dolly'),
			'manage_options',
			'hello-dolly',
			'hello_dolly_settings_page_render'
		);
	}

	add_action( 'admin_menu', 'hello_dolly_admin_menu' );

	/**
	 * @return array Supported songs list.
	 */
	function hello_dolly_get_songs()
	{
		$songs = array('Hello Dolly');
		$songs[] = 'Summertime';
		$songs[] = 'Wonderful World';
		$songs[] = 'Dream a Little Dream';

		return $songs;
	}

	/**
	 * Song update handler.
	 */
	function hello_dolly_update_song()
	{
		if ('POST' === $_SERVER['REQUEST_METHOD'] && isset($_POST['selected_song'])) {

			$songs = hello_dolly_get_songs();

			$new_selected_song = in_array( $_POST['selected_song'], $songs ) ?
				$_POST['selected_song'] :
				'Hello Dolly';

			if ( $new_selected_song !== get_option( 'hello_dolly_song', 'Hello Dolly' ) ) {
				// Update selected song.
				update_option( 'hello_dolly_song', $new_selected_song );
			}
		}
	}

	add_action( 'admin_init', 'hello_dolly_update_song' );

	/**
	 * Render simple settings page for the song selection.
	 */
	function hello_dolly_settings_page_render() {
		$selected_song = get_option( 'hello_dolly_song', 'Hello Dolly' );

		$songs = hello_dolly_get_songs();

		if ( ! in_array( $selected_song, $songs ) ) {
			$selected_song = 'Hello Dolly';
		}

		?>
		<div class='wrap'>
			<h2>Settings</h2>

			<form method='post' action="">
				<?php foreach ( $songs as $song ) : ?>
					<?php $song_id = preg_replace( '/[^\da-z]/i', '', strtolower( $song ) ) ?>
					<p><label for="<?php echo $song_id ?>"><input type="radio" id="<?php echo $song_id ?>"
					                                              name="selected_song"
					                                              value="<?php echo $song ?>" <?php checked( $song, $selected_song ) ?> /> <?php echo $song ?>
						</label></p>
				<?php endforeach ?>
				<p class='submit'>
					<input name='submit' type='submit' id='submit' class='button-primary'
					       value='<?php _e( "Save Changes" ) ?>'/>
				</p>
			</form>
		</div>
	<?php
	}

	function hello_dolly_get_lyric() {
		/** These are the lyrics to Hello Dolly */
		$lyrics = array(
			'Hello Dolly' => "Hello, Dolly
Well, hello, Dolly
It's so nice to have you back where you belong
You're lookin' swell, Dolly
I can tell, Dolly
You're still glowin', you're still crowin'
You're still goin' strong
We feel the room swayin'
While the band's playin'
One of your old favourite songs from way back when
So, take her wrap, fellas
Find her an empty lap, fellas
Dolly'll never go away again
Hello, Dolly
Well, hello, Dolly
It's so nice to have you back where you belong
You're lookin' swell, Dolly
I can tell, Dolly
You're still glowin', you're still crowin'
You're still goin' strong
We feel the room swayin'
While the band's playin'
One of your old favourite songs from way back when
Golly, gee, fellas
Find her a vacant knee, fellas
Dolly'll never go away
Dolly'll never go away
Dolly'll never go away again"
		);

		/** These are the lyrics to Summertime */
		$lyrics["Summertime"] = "Summertime and the livin' is easy
Fish are jumpin' and the cotton is high
Yo' daddy's rich and yo' mama's good lookin'
So hush little baby, don't you cry
One of these mornin's you gonna rise up singin'
You gonna spread your little wings and you'll take to the sky
But 'till that mornin' there ain't nothin' gonna harm you
With yo mama and daddy standin' bye
Now it's summertime and the livin' is easy
Them fish are jumpin' and the cotton's 'bout waist high
Yo' daddy's rich and, ya know yo' mama's good lookin'
Now hush little baby, don't you cry
Summertime
Ah, said it's summertime";

		/** These are the lyrics to (What a) Wonderful World */
		$lyrics["Wonderful World"] = "I see trees of green, red roses, too,
I see them bloom, for me and you
And I think to myself
What a wonderful world.
I see skies of blue, and clouds of white,
The bright blessed day, the dark sacred night
And I think to myself
What a wonderful world.
The colors of the rainbow, so pretty in the sky,
Are also on the faces of people going by.
I see friends shaking hands, sayin', \"How do you do?\"
They're really sayin', \"I love you.\"
I hear babies cryin'. I watch them grow.
They'll learn much more than I'll ever know
And I think to myself
What a wonderful world
Yes, I think to myself
What a wonderful world";

		/** These are the lyrics to Dream a Little Dream */
		$lyrics["Dream a Little Dream"] = "Stars shining bright above you
Night breezes seem to whisper \"I love you\"
Birds singing in the sycamore tree
Dream a little dream of me
Say \"Nighty-night\" and kiss me
Just hold me tight and tell me you'll miss me
While I'm alone and blue as can be
Dream a little dream of me
Stars fading but I linger on dear
Oh how you linger on
Still craving your kiss
How you crave my kiss
Now I'm longin' to linger till dawn dear
Just saying this
Give me a little kiss
Sweet dreams till sunbeams find you
Sweet dreams that leave all worries behind you
But in your dreams, whatever they be
Dream a little dream of me
Stars fading but I linger on dear
Still craving your kiss
Yeah, I'm longing to linger till dawn dear
Just saying this, yes
Sweet dreams
Dreamin'
Till sunbeams find you
Keep dreaming
Gotta keep dreamin'
Leave your worries far behind you
But in your dreams, whatever they be
You gotta make me a promise
Promise to me you'll dream
Dream a little dream of me";

		$selected_song = get_option( 'hello_dolly_song', 'Hello Dolly' );

		// Here we split it into lines
		$lyrics = explode( "\n", isset($lyrics[ $selected_song ]) ? $lyrics[ $selected_song ] : 'Hello Dolly' );

		// And then randomly choose a line
		return wptexturize( $lyrics[ mt_rand( 0, count( $lyrics ) - 1 ) ] );
	}

	// This just echoes the chosen line, we'll position it later
	function hello_dolly() {
		$selected_song = get_option( 'hello_dolly_song', 'Hello Dolly' );

		$songs = hello_dolly_get_songs();
		if ( ! in_array( $selected_song, $songs ) ) {
			$selected_song = 'Hello Dolly';
		}

		$chosen = hello_dolly_get_lyric();
		echo "<p id='dolly'><b>" . $selected_song . ":</b> $chosen</p>";
	}

	// Now we set that function up to execute when the admin_notices action is called
	add_action( 'admin_notices', 'hello_dolly' );

	// We need some CSS to position the paragraph
	function dolly_css() {
		// This makes sure that the positioning is also good for right-to-left languages
		$x = is_rtl() ? 'left' : 'right';

		echo "
	<style type='text/css'>
	#dolly {
		float: $x;
		padding-$x: 15px;
		padding-top: 5px;
		margin: 0;
		font-size: 11px;
	}
	</style>
	";
	}

	add_action( 'admin_head', 'dolly_css' );