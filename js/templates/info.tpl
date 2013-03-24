<div class="page" id="page-info">
	<hgroup>
		<h1>About <%= title %></h1>
	</hgroup>

	<p>
		Album release date : <%= release_date %>
		<br><br>
		<%= about %>
		<br><br>
		<a href="<%= url %>" title="<%= title %>" target="_blank">CDs and Downloads available at BandCamp</a>
	</p>

	<section class="contact" id="contact">
	
		<h2>Contact</h2>
		
		<form method="post" action="send.php" id="contact-form">
		
			<p>
				<label class="valid" for="contact-name">Your name</label>
				<input type="text" id="contact-name" name="contact-name" value="">
				<label class="valid" for="contact-email">Your e-mail</label>
				<input type="text" id="contact-email" name="contact-email" value="">
				<label class="valid" for="contact-subject">Subject</label>
				<input type="text" id="contact-subject" name="contact-subject" value="">
			</p>
			
			<p>
				<label class="valid" for="contact-message">Your message</label>
				<textarea id="contact-message" name="contact-message"></textarea>
			</p>
		
			<div>
				<input type="submit" value="SEND" class="send">
			</div>
			
		</form>
		
	</section>

	<section class="social-media">
		<a target="_blank" href="http://burzinskimusic.com" id="bz" title="Burzinski official website">&nbsp;</a><!--
		--><a target="_blank" href="http://www.facebook.com/burzinskimusic" id="fb" title="Burzinski on FaceBook">&nbsp;</a><!--
		--><a target="_blank" href="http://www.twitter.com/burzinski" id="tw" title="Burzinski on Twitter">&nbsp;</a>
	</section>
	
</div>

