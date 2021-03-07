<script>
  // Components
	import PrimaryHeading from "$components/Common/PrimaryHeading.svelte"
	import PrimaryParagraph from "$components/Common/PrimaryParagraph.svelte"
	
	// Const and Vars
	const headingText = 'Our Company';
  const paragraphText = 'At Netflix, we want to entertain the world. Whatever your taste, and no matter where you live, we give you access to best-in-class TV shows, movies and documentaries. Our members control what they want to watch, when they want it, with no ads, in one simple subscription. We’re streaming in more than 30 languages and 190 countries, because great stories can come from anywhere and be loved everywhere. We are the world’s biggest fans of entertainment, and we’re always looking to help you find your next favorite story.';
</script>

<PrimaryHeading {headingText} />
<PrimaryParagraph {paragraphText} />